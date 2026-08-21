import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCaseStudies,
} from '../features/caseStudies/caseStudiesApi';
import {
  setCategoryFilter,
  setQuery,
} from '../features/caseStudies/caseStudiesSlice';
import {
  selectCaseStudiesStatus,
  selectCaseStudiesError,
  selectCategoryFilter,
  selectQuery,
  selectFilteredCaseStudies,
  selectVisibleCount,
} from '../features/caseStudies/caseStudiesSelectors';
import CaseStudyCard from './CaseStudyCard';

const CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Blockchain'];

const SkeletonCard = () => (
  <div className="rounded-xl border border-white/10 bg-[#110D2E] p-5 shadow-lg">
    <div className="flex items-center justify-between">
      <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
      <div className="h-4 w-10 animate-pulse rounded bg-white/10" />
    </div>
    <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-white/10" />
    <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10" />
    <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-white/10" />
  </div>
);

const CaseStudiesBoard = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectCaseStudiesStatus);
  const error = useSelector(selectCaseStudiesError);
  const category = useSelector(selectCategoryFilter);
  const query = useSelector(selectQuery);
  const filtered = useSelector(selectFilteredCaseStudies);
  const visibleCount = useSelector(selectVisibleCount);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCaseStudies());
    }
  }, [dispatch, status]);

  return (
    <section id="case-studies-board" className="container mx-auto px-4 lg:px-20 py-16">
      <div className="flex flex-col items-center gap-y-4 text-center text-white">
        <h1 className="text-3xl font-semibold">Case Studies Board</h1>
        <p className="max-w-2xl text-gray-400">
          Explore our recent work across web, mobile, AI and blockchain.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategoryFilter(cat))}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                category === cat
                  ? 'bg-[#6318F1] text-white shadow-lg'
                  : 'border border-white/10 text-gray-300 hover:border-purple-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full max-w-xs">
          <input
            type="search"
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
            placeholder="Search case studies..."
            className="w-full rounded-full border border-white/10 bg-[#110D2E] px-5 py-2 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-purple-500/60"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Showing {visibleCount} {visibleCount === 1 ? 'result' : 'results'}
      </p>

      {status === 'loading' && (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

      {status === 'failed' && (
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-8 py-12 text-center">
          <p className="text-lg font-semibold text-red-300">
            Something went wrong loading case studies
          </p>
          <p className="text-sm text-red-200/80">{error}</p>
          <button
            onClick={() => dispatch(fetchCaseStudies())}
            className="rounded-full bg-[#6318F1] px-6 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
          >
            Retry
          </button>
        </div>
      )}

      {status === 'succeeded' && visibleCount === 0 && (
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#110D2E] px-8 py-12 text-center">
          <p className="text-lg font-semibold text-gray-200">No case studies found</p>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or category filter.
          </p>
        </div>
      )}

      {status === 'succeeded' && visibleCount > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="transition-opacity duration-200">
              <CaseStudyCard caseStudy={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudiesBoard;