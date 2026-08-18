import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFeatureId } from '../features/whyChooseUs/whyChooseUsSlice';
import { selectAllFeatures, selectActiveFeatureId } from '../features/whyChooseUs/whyChooseUsSelectors';
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
    const dispatch = useDispatch();
    const features = useSelector(selectAllFeatures);
    const activeFeatureId = useSelector(selectActiveFeatureId);

    return (
        <section id="why-choose-us" className="relative py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto text-white overflow-hidden">

            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none">
                <svg width="60" height="120" viewBox="0 0 60 120">
                    <rect width="60" height="120" fill="url(#grid-dots-side)" />
                </svg>
            </div>

            <div className="flex flex-col items-center mb-16 text-center gap-y-4">
                {/* Badge */}
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-500/30 uppercase">
                    Why Choose Us
                </span>

                {/* Dual color title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Why Companies <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Choose Us</span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
                    We deliver scalable, secure, and future-ready solutions.
                </p>

                {/* Horizontal gradient line */}
                <div className="w-32 h-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 mt-2"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        id={feature.id}
                        title={feature.title}
                        desc={feature.desc}
                        isActive={activeFeatureId === feature.id}
                        onClick={() => dispatch(setActiveFeatureId(feature.id))}
                    />
                ))}
            </div>

            {/* Footer action button */}
            <div className="flex flex-col items-center gap-4 text-center mt-6">
                <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 hover:to-pink-400 font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-900/40 flex items-center gap-2">
                    Start Your Project
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <span className="text-xs text-gray-500 tracking-wide">
                    Let's build something amazing together.
                </span>
            </div>
        </section>
    );
};

export default WhyChooseUs;