import { Matrix4, OrthographicCamera, Vector3 } from "three";

type Point = [number, number, number];
type Face = { points: Point[]; shade: string };

const camera = new OrthographicCamera(-150, 150, 140, -140, 1, 2000);
camera.position.set(240, 220, 500);
camera.lookAt(0, 0, 0);
camera.updateMatrixWorld();
const view = camera.position.clone().normalize();
const hinge = new Vector3(0, 42, 0);
const opening = 105 * Math.PI / 180;

function cuboid(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): Face[] {
  return [
    { shade: "top", points: [[x0,y1,z0],[x0,y1,z1],[x1,y1,z1],[x1,y1,z0]] },
    { shade: "underside", points: [[x0,y0,z0],[x1,y0,z0],[x1,y0,z1],[x0,y0,z1]] },
    { shade: "front", points: [[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]] },
    { shade: "side", points: [[x1,y0,z1],[x1,y0,z0],[x1,y1,z0],[x1,y1,z1]] },
    { shade: "side", points: [[x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0]] },
    { shade: "side", points: [[x1,y0,z0],[x0,y0,z0],[x0,y1,z0],[x1,y1,z0]] },
  ];
}

function rotate(point: Point, angle: number) {
  return new Vector3(...point).sub(hinge).applyMatrix4(new Matrix4().makeRotationX(-angle)).add(hinge);
}

function project(point: Vector3) {
  const projected = point.clone().project(camera);
  return `${(150 + projected.x * 150).toFixed(2)},${(242 - projected.y * 140).toFixed(2)}`;
}

function projectedFace(face: Face, angle = 0, attachedHandle = false) {
  const points = face.points.map(point => rotate(point, angle));
  const normal = points[1].clone().sub(points[0]).cross(points[2].clone().sub(points[0]));
  const outerNormal = new Vector3(0, 1, 0).applyMatrix4(new Matrix4().makeRotationX(-angle));
  return {
    points: points.map(project).join(" "),
    visible: normal.dot(view) > 0.001 && (!attachedHandle || outerNormal.dot(view) > 0.02),
  };
}

// All faces sample the same rigid rotation, including the reverse closing arc.
const times = [0, 0.16, ...Array.from({ length: 32 }, (_, i) => 0.16 + (i + 1) * 0.11 / 32),
  0.87, ...Array.from({ length: 32 }, (_, i) => 0.87 + (i + 1) * 0.07 / 32), 1];
function angleAt(time: number) {
  const progress = time < 0.27 ? (time - 0.16) / 0.11 : time <= 0.87 ? 1 : (0.94 - time) / 0.07;
  const clamped = Math.max(0, Math.min(1, progress));
  return opening * (0.5 - Math.cos(Math.PI * clamped) / 2);
}
const keyTimes = times.join(";");
const lid = cuboid(-85, 85, 42, 49, 0, 60);
const handle = [
  ...cuboid(-23, -18, 49, 61, 27, 33),
  ...cuboid(18, 23, 49, 61, 27, 33),
  ...cuboid(-23, 23, 58, 63, 27, 33),
];

function Lid({ animated }: { animated: boolean }) {
  return <g className={animated ? "skills-lid-animated" : "skills-lid-static"}>
    {[...lid, ...handle].map((face, index) => {
      const isHandle = index >= lid.length;
      const initial = projectedFace(face, animated ? 0 : opening, isHandle);
      const frames = animated ? times.map(time => projectedFace(face, angleAt(time), isHandle)) : [];
      return <polygon key={index} className={`skills-solid-${isHandle ? "handle" : face.shade}`}
        points={initial.points} opacity={initial.visible ? 1 : 0} strokeWidth={isHandle ? 1 : 1.5}>
        {animated && <>
          <animate attributeName="points" dur="6s" repeatCount="indefinite" keyTimes={keyTimes}
            values={frames.map(frame => frame.points).join(";")} calcMode="linear" />
          <animate attributeName="opacity" dur="6s" repeatCount="indefinite" keyTimes={keyTimes}
            values={frames.map(frame => frame.visible ? 1 : 0).join(";")} calcMode="discrete" />
        </>}
      </polygon>;
    })}
  </g>;
}

function fixedPoints(points: Point[]) {
  return points.map(point => project(new Vector3(...point))).join(" ");
}

export default function SkillsToolboxBody({ front = false }: { front?: boolean }) {
  if (front) {
    const faces = cuboid(-85, 85, 0, 42, 0, 60).filter(face => face.shade === "front" || face.shade === "side");
    return <g className="skills-toolbox-front">
      {faces.map((face, index) => {
        const projected = projectedFace(face);
        return projected.visible && <polygon key={index} className={`skills-solid-${face.shade}`} points={projected.points} strokeWidth="1.5" />;
      })}
      <polygon className="skills-solid-handle" points={fixedPoints([[-9,34,61],[9,34,61],[9,19,61],[-9,19,61]])} strokeWidth="1.5" />
      <polyline points={fixedPoints([[-72,9,61],[-45,9,61]])} opacity="0.5" />
      <polyline points={fixedPoints([[45,9,61],[72,9,61]])} opacity="0.5" />
    </g>;
  }

  return <g className="skills-toolbox-geometry">
    <polygon className="skills-solid-top" points={fixedPoints([[-85,42,0],[-85,42,60],[85,42,60],[85,42,0]])} strokeWidth="1.5" />
    <polygon className="skills-solid-cavity" points={fixedPoints([[-78,42,7],[-78,42,53],[78,42,53],[78,42,7]])} strokeWidth="1" />
    <polyline points={fixedPoints([[-78,42,7],[-78,29,7],[78,29,7],[78,42,7]])} opacity="0.45" strokeWidth="1" />
    <Lid animated />
    <Lid animated={false} />
    {[-62, 48].map(x => <polyline key={x} points={fixedPoints([[x,42,0],[x+14,42,0]])} strokeWidth="3" />)}
  </g>;
}
