import React from 'react';

const categoryBadgeColors = {
  Web: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Mobile: 'bg-green-500/20 text-green-300 border-green-500/30',
  AI: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Blockchain: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
};

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#110D2E] p-5 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-purple-500/40">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryBadgeColors[caseStudy.category]}`}
        >
          {caseStudy.category}
        </span>
        <span className="text-sm text-gray-400">{caseStudy.year}</span>
      </div>

      <h3 className="truncate text-lg font-semibold text-gray-100">{caseStudy.title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{caseStudy.summary}</p>
    </article>
  );
};

export default CaseStudyCard;