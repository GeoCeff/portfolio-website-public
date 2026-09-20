"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const system = new THREE.Group();
    system.scale.setScalar(0.86);
    const core = new THREE.Group();
    system.add(core);
    scene.add(system);

    const ink = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.26, wireframe: true });
    const accent = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.72, wireframe: true });
    const accentLine = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.46 });
    const particles = new THREE.PointsMaterial({ transparent: true, opacity: 0.45, size: 0.035 });

    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.72, 2), ink);
    const nucleus = new THREE.Mesh(new THREE.OctahedronGeometry(1.04, 0), accent);
    core.add(shell, nucleus);

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.28, 0.018, 8, 160), accentLine);
    ringOne.rotation.set(1.18, 0.14, 0.2);
    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.78, 0.012, 8, 160), ink);
    ringTwo.rotation.set(0.34, 1.12, -0.28);
    system.add(ringOne, ringTwo);

    const reticleMaterial = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.34 });
    const cockpit = new THREE.Group();
    system.add(cockpit);

    const makeLine = (from: THREE.Vector3, to: THREE.Vector3) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
      const line = new THREE.Line(geometry, reticleMaterial);
      cockpit.add(line);
      return line;
    };

    for (let index = 0; index < 12; index += 1) {
      const angle = (index / 12) * Math.PI * 2;
      const inner = new THREE.Vector3(Math.cos(angle) * 3.12, Math.sin(angle) * 1.16, -0.24);
      const outer = new THREE.Vector3(Math.cos(angle) * 3.48, Math.sin(angle) * 1.32, -0.24);
      makeLine(inner, outer);
    }

    const codeBars = Array.from({ length: 10 }, (_, index) => {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.2 + (index % 4) * 0.16, 0.018, 0.018),
        index % 3 === 0 ? accentLine : ink
      );
      const side = index % 2 === 0 ? -1 : 1;
      bar.position.set(side * (2.86 + (index % 3) * 0.1), 1.2 - index * 0.25, -0.15);
      bar.rotation.z = side * 0.08;
      cockpit.add(bar);
      return bar;
    });

    const orbiters = [-1.9, 0.35, 2.2].map((phase, index) => {
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.12 + index * 0.035, 0),
        index === 1 ? accent : ink
      );
      mesh.userData.phase = phase;
      mesh.userData.radius = 2.28 + index * 0.25;
      system.add(mesh);
      return mesh;
    });

    const pointPositions = new Float32Array(90 * 3);
    for (let index = 0; index < 90; index += 1) {
      const radius = 2.45 + (index % 9) * 0.13;
      const angle = index * 2.399963;
      pointPositions[index * 3] = Math.cos(angle) * radius;
      pointPositions[index * 3 + 1] = Math.sin(angle) * radius * 0.56;
      pointPositions[index * 3 + 2] = Math.sin(index * 1.7) * 0.72;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
    const particleField = new THREE.Points(particleGeometry, particles);
    system.add(particleField);

    const refreshColors = () => {
      const styles = getComputedStyle(host);
      const text = styles.getPropertyValue("--text").trim() || "#0a0a0a";
      const blue = styles.getPropertyValue("--accent").trim() || "#377df7";
      ink.color.set(text);
      accent.color.set(blue);
      accentLine.color.set(blue);
      particles.color.set(blue);
    };
    refreshColors();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollDepth = 0;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (reducedMotion.matches) renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const recolor = () => {
      refreshColors();
      if (reducedMotion.matches) renderer.render(scene, camera);
    };
    colorScheme.addEventListener("change", recolor);

    const pointer = new THREE.Vector2();
    const move = (event: PointerEvent) => {
      if (reducedMotion.matches) return;
      pointer.set(event.clientX / window.innerWidth - 0.5, event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move, { passive: true });

    const setScrollDepth = () => {
      scrollDepth = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    };
    setScrollDepth();
    window.addEventListener("scroll", setScrollDepth, { passive: true });

    const startedAt = performance.now();
    let frame = 0;
    const draw = () => {
      const elapsed = (performance.now() - startedAt) / 1000;
      if (!reducedMotion.matches) {
        system.rotation.x += (pointer.y * 0.35 - system.rotation.x) * 0.025;
        system.rotation.y += (pointer.x * 0.5 - system.rotation.y) * 0.025;
        system.position.y = -scrollDepth * 0.24;
        system.position.z = scrollDepth * 0.34;
        core.rotation.x = elapsed * 0.08;
        core.rotation.y = elapsed * 0.13;
        ringOne.rotation.z = elapsed * 0.08;
        ringTwo.rotation.z = -elapsed * 0.055;
        cockpit.rotation.z = Math.sin(elapsed * 0.28) * 0.04;
        codeBars.forEach((bar, index) => {
          bar.scale.x = 0.78 + Math.sin(elapsed * 1.4 + index) * 0.16;
        });
        particleField.rotation.z = elapsed * 0.018;
        orbiters.forEach((orbiter, index) => {
          const angle = elapsed * (0.32 + index * 0.035) + orbiter.userData.phase;
          orbiter.position.set(
            Math.cos(angle) * orbiter.userData.radius,
            Math.sin(angle) * orbiter.userData.radius * 0.48,
            Math.sin(angle * 1.4) * 0.75
          );
        });
      }

      renderer.render(scene, camera);
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", setScrollDepth);
      colorScheme.removeEventListener("change", recolor);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          object.geometry.dispose();
        }
      });
      [ink, accent, accentLine, particles, reticleMaterial].forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="hero-scene" data-3d-scene ref={hostRef} />;
}
