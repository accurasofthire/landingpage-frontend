import React from 'react';
import { FaUsers, FaRocket, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

// Color themes and icons mapping based on card ID
const cardThemes = {
    "senior-engineers": {
        border: "border-purple-600/80 hover:border-purple-500",
        activeBorder: "border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]",
        iconBg: "bg-purple-950/40 border-purple-500/30",
        iconColor: "text-purple-400",
        line: "bg-purple-500",
        dotColor: "fill-purple-500", // Solid color, opacity handled by container
        icon: <FaUsers className="w-10 h-10" />
    },
    "fast-delivery": {
        border: "border-blue-600/80 hover:border-blue-500",
        activeBorder: "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        iconBg: "bg-blue-950/40 border-blue-500/30",
        iconColor: "text-blue-400",
        line: "bg-blue-400",
        dotColor: "fill-blue-500",
        icon: <FaRocket className="w-10 h-10" />
    },
    "scalable-teams": {
        border: "border-teal-600/80 hover:border-teal-500",
        activeBorder: "border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.3)]",
        iconBg: "bg-teal-950/40 border-teal-500/30",
        iconColor: "text-teal-400",
        line: "bg-teal-400",
        dotColor: "fill-teal-500",
        icon: <FaUserFriends className="w-10 h-10" />
    },
    "secure-by-design": {
        border: "border-pink-600/80 hover:border-pink-500",
        activeBorder: "border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]",
        iconBg: "bg-pink-950/40 border-pink-500/30",
        iconColor: "text-pink-400",
        line: "bg-pink-500",
        dotColor: "fill-pink-500",
        icon: <FaShieldAlt className="w-10 h-10" />
    }
};

const FeatureCard = ({ id, title, desc, isActive, onClick }) => {
    const theme = cardThemes[id] || cardThemes["senior-engineers"];

    return (
        <div
            onClick={onClick}
            className={`relative overflow-hidden cursor-pointer p-8 pb-14 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center bg-[#090333]/90 select-none ${isActive ? theme.activeBorder : `${theme.border}`
                }`}
        >
            {/* Icon Frame */}
            <div className={`p-4 rounded-2xl border mb-6 flex items-center justify-center ${theme.iconBg} ${theme.iconColor}`}>
                {theme.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3">
                {title}
            </h3>

            {/* Decorative colored line under title */}
            <div className={`w-10 h-1 rounded-full mb-6 ${theme.line}`}></div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                {desc}
            </p>

            {/* Bottom Dotted Perspective Matrix Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                    {Array.from({ length: 5 }).map((_, r) => {
                        const dots = [];
                        for (let c = 0; c <= 20; c++) {
                            const x = (c / 20) * 200;
                            const dx = c - 10;

                            // Curve equation: bends up on the sides (quadratic offset)
                            const y = 35 + r * 5 - (dx * dx) * 0.15;

                            dots.push(
                                <circle
                                    key={`${r}-${c}`}
                                    cx={x}
                                    cy={y}
                                    r={0.7 + r * 0.12} // larger radius towards bottom for perspective depth
                                    className={theme.dotColor}
                                    opacity={0.3 + (r * 0.25)} // fade out towards background
                                />
                            );
                        }
                        return dots;
                    })}
                </svg>
            </div>
        </div>
    );
};

export default FeatureCard;
