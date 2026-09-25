import type { CSSProperties } from "react";

type AnimatedHeroTitleProps = {
  text: string;
};

export default function AnimatedHeroTitle({ text }: AnimatedHeroTitleProps) {
  return (
    <h1 className="animated-hero-title" aria-label={text}>
      {Array.from(text).map((letter, index) => (
        <span aria-hidden="true" key={`${letter}-${index}`} style={{ "--letter-index": index } as CSSProperties}>
          {letter}
        </span>
      ))}
    </h1>
  );
}
