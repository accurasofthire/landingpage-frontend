import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiAward, FiSend, FiUsers, FiShield } from 'react-icons/fi';
import { setActiveFeature } from '../features/whyChooseUs/whyChooseUsSlice';
import FeatureCard from './FeatureCard';

const ACCENTS = {
  'senior-engineers': {
    icon: FiAward,
    bg: 'bg-[#150837]',
    border: 'border-[#411073]/50',
    borderActive: 'border-[#a855f7]',
    glow: 'shadow-[0_0_40px_-8px_rgba(139,92,246,0.55)]',
    glowSoft: 'shadow-[0_0_30px_-16px_rgba(139,92,246,0.45)]',
    iconBox: 'border-[#6d28d9]/50 bg-[#1e0d42]',
    iconColor: 'text-[#c06ef4]',
    waveColor: '#c06ef4',
  },
  'fast-delivery': {
    icon: FiSend,
    bg: 'bg-[#09092a]',
    border: 'border-[#1b2c71]/50',
    borderActive: 'border-[#3b82f6]',
    glow: 'shadow-[0_0_40px_-8px_rgba(59,130,246,0.55)]',
    glowSoft: 'shadow-[0_0_30px_-16px_rgba(59,130,246,0.45)]',
    iconBox: 'border-[#2563eb]/50 bg-[#0d1544]',
    iconColor: 'text-[#4aa8f0]',
    waveColor: '#4aa8f0',
  },
  'scalable-teams': {
    icon: FiUsers,
    bg: 'bg-[#0c102d]',
    border: 'border-[#1c788b]/50',
    borderActive: 'border-[#2dd4bf]',
    glow: 'shadow-[0_0_40px_-8px_rgba(20,229,214,0.45)]',
    glowSoft: 'shadow-[0_0_30px_-16px_rgba(20,229,214,0.4)]',
    iconBox: 'border-[#2dd4bf]/40 bg-[#0b2540]',
    iconColor: 'text-[#14e5d6]',
    waveColor: '#14e5d6',
  },
  'secure-by-design': {
    icon: FiShield,
    bg: 'bg-[#0d0623]',
    border: 'border-[#571b5d]/50',
    borderActive: 'border-[#ec4899]',
    glow: 'shadow-[0_0_40px_-8px_rgba(243,108,206,0.45)]',
    glowSoft: 'shadow-[0_0_30px_-16px_rgba(243,108,206,0.4)]',
    iconBox: 'border-[#a855f7]/40 bg-[#2a0a30]',
    iconColor: 'text-[#f36cce]',
    waveColor: '#f36cce',
  },
};

const WhyChooseUs = () => {
  const dispatch = useDispatch();
  const features = useSelector((state) => state.whyChooseUs.items);
  const activeFeatureId = useSelector((state) => state.whyChooseUs.activeFeatureId);

  return (
    <section id="why-choose-us" className="container mx-auto px-4 py-20 lg:px-20">
      <div className="flex flex-col items-center gap-y-6 text-center">
        <span className="rounded-full border border-[#3f2a63] bg-[#1b063f] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white">
          Why Choose Us
        </span>

        <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
          <span className="text-[#f9f9fa]">Why Companies </span>
          <span className="bg-gradient-to-r from-[#8d46d9] via-[#5d76f7] to-[#29e9e8] bg-clip-text text-transparent">
            Choose Us
          </span>
        </h1>

        <p className="max-w-xl text-[#a8a8be]">
          We deliver scalable, secure, and future-ready solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={{ ...feature, icon: ACCENTS[feature.id].icon }}
            accent={ACCENTS[feature.id]}
            active={feature.id === activeFeatureId}
            onSelect={() => dispatch(setActiveFeature(feature.id))}
          />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-y-4">
        <button className="flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-[#5629fb] to-[#a90cc4] px-9 py-3.5 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105">
          Start Your Project
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-sm text-[#646588]">Let&apos;s build something amazing together.</p>
      </div>
    </section>
  );
};

export default WhyChooseUs;