import React from 'react';
import ParticleWave from './ParticleWave';

const FeatureCard = ({ feature, accent, active, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`relative flex min-h-[420px] flex-col items-center overflow-hidden rounded-2xl border px-6 pt-12 pb-20 text-center transition-all duration-300 ${accent.bg} ${
        active
          ? `${accent.borderActive} ${accent.glow} -translate-y-1`
          : `${accent.border} ${accent.glowSoft} hover:-translate-y-1`
      }`}
    >
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-2xl border ${accent.iconBox}`}
      >
        <feature.icon className={`h-11 w-11 ${accent.iconColor}`} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#f9f9fa]">{feature.title}</h3>
      <div
        className="mt-3 h-0.5 w-1/5 rounded-full"
        style={{ background: accent.waveColor }}
      />
      <p className="mt-4 text-sm leading-relaxed text-[#b8bbd7]">{feature.desc}</p>

      <ParticleWave color={accent.waveColor} />
    </button>
  );
};

export default FeatureCard;