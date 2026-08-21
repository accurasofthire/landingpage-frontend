import React from 'react';

/**
 * A 3D particle wave rendered as two parallax layers of dot columns.
 * Column heights follow a sine crest; per-dot opacity/scale creates depth.
 * Matches the card accent color via the `color` prop.
 */
const WaveLayer = ({ color, columns, maxDots, baseSize, back }) => {
  const angleStep = (Math.PI * 1.4) / columns;

  return (
    <div
      className={`flex items-end justify-between ${back ? 'gap-2 px-2 opacity-50 blur-[2px]' : 'gap-1.5 px-4'}`}
      aria-hidden="true"
    >
      {Array.from({ length: columns }).map((_, c) => {
        // sine crest profile across columns
        const crest = Math.abs(Math.sin(c * angleStep - 1));
        const dots = Math.max(1, Math.round(1 + crest * maxDots));

        return (
          <div
            key={c}
            className={`flex flex-col-reverse items-center gap-1 ${
              back ? 'animate-particle-wave-back' : 'animate-particle-wave'
            }`}
            style={{ animationDelay: `${c * 110}ms` }}
          >
            {Array.from({ length: dots }).map((_, r) => {
              const depth = r / dots; // 0 at bottom, 1 at crest
              const size = baseSize * (0.6 + depth * 0.8);
              const opacity = (back ? 0.25 : 0.2) + depth * (back ? 0.45 : 0.8);
              return (
                <span
                  key={r}
                  className="block rounded-full"
                  style={{
                    width: size,
                    height: size,
                    background: color,
                    opacity,
                    boxShadow: depth > 0.85 ? `0 0 6px ${color}` : 'none',
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const ParticleWave = ({ color, className = '' }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden pb-3 ${className}`}
      aria-hidden="true"
    >
      <WaveLayer color={color} columns={22} maxDots={5} baseSize={3} back />
      <div className="-mt-4">
        <WaveLayer color={color} columns={26} maxDots={7} baseSize={3.5} back={false} />
      </div>
    </div>
  );
};

export default ParticleWave;