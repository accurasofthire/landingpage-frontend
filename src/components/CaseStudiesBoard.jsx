import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCaseStudies,
    setCategoryFilter,
    setQueryFilter
} from '../features/caseStudies/caseStudiesSlice';
import {
    selectFilteredCaseStudies,
    selectCaseStudiesStatus,
    selectCaseStudiesError,
    selectCaseStudiesFilters,
    selectVisibleCount
} from '../features/caseStudies/caseStudiesSelectors';

const categories = ["All", "Web", "Mobile", "AI", "Blockchain"];

const CaseStudiesBoard = () => {
    const dispatch = useDispatch();
    const filteredStudies = useSelector(selectFilteredCaseStudies);
    const status = useSelector(selectCaseStudiesStatus);
    const error = useSelector(selectCaseStudiesError);
    const filters = useSelector(selectCaseStudiesFilters);
    const visibleCount = useSelector(selectVisibleCount);

    // local state for transition fade effect when changing filters
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        dispatch(fetchCaseStudies());
    }, [dispatch]);

    const handleCategoryChange = (cat) => {
        setIsFading(true);
        setTimeout(() => {
            dispatch(setCategoryFilter(cat));
            setIsFading(false);
        }, 200);
    };

    const handleQueryChange = (e) => {
        dispatch(setQueryFilter(e.target.value));
    };

    const handleRetry = () => {
        dispatch(fetchCaseStudies());
    };

    return (
        <section id="case-studies" className="relative py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto text-white">
            {/* Background ambient light */}
            <div className="absolute left-1/2 top-10 -translate-x-1/2 -z-10 bg-gradient-to-r w-96 h-96 rounded-full blur-3xl from-pink-600 opacity-20 via-purple-600 to-indigo-600"></div>

            <div className="flex flex-col items-center mb-12 text-center gap-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Our Success Stories
                </h2>
                <p className="text-gray-400 max-w-2xl text-lg">
                    Explore how we help global brands design, build, and scale digital products that stand out.
                </p>
            </div>

            {/* Filters and Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-gray-800">
                {/* Category Chips */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const isActive = filters.category === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg shadow-purple-900/40 scale-105'
                                        : 'bg-[#120B38] text-gray-400 hover:bg-[#1C134A] hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Search cases..."
                        value={filters.query}
                        onChange={handleQueryChange}
                        className="w-full bg-[#120B38] text-white border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-full px-5 py-2.5 text-sm outline-none transition-all placeholder-gray-500"
                    />
                    {filters.query && (
                        <button
                            onClick={() => dispatch(setQueryFilter(''))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Loading Skeleton State */}
            {status === 'loading' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-[#120B38]/50 border border-gray-800/80 rounded-2xl p-6 space-y-4 animate-pulse">
                            <div className="h-4 bg-gray-700/60 rounded w-1/4"></div>
                            <div className="h-6 bg-gray-700/60 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-700/60 rounded w-full"></div>
                                <div className="h-4 bg-gray-700/60 rounded w-5/6"></div>
                            </div>
                            <div className="h-4 bg-gray-700/60 rounded w-1/5 pt-4"></div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {status === 'failed' && (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-[#120B38]/40 border border-red-500/20 rounded-2xl p-8">
                    <div className="text-red-500 text-5xl mb-4">⚠️</div>
                    <h3 className="text-2xl font-bold mb-2">Something went wrong</h3>
                    <p className="text-gray-400 mb-6 max-w-md">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-indigo-500 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        Retry Connection
                    </button>
                </div>
            )}

            {/* Succeeded State */}
            {status === 'succeeded' && (
                <div className={`transition-opacity duration-300 ${isFading ? 'opacity-30' : 'opacity-100'}`}>
                    {visibleCount === 0 ? (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-[#120B38]/20 border border-gray-800/50 rounded-2xl">
                            <span className="text-5xl mb-4">🔍</span>
                            <h3 className="text-xl font-bold mb-1">No case studies found</h3>
                            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                        </div>
                    ) : (
                        /* Grid layout */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="group relative bg-[#120B38]/60 border border-gray-800/80 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/25 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Category Label */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                {study.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{study.year}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors duration-300">
                                            {study.title}
                                        </h3>

                                        {/* Summary */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            {study.summary}
                                        </p>
                                    </div>

                                    {/* Decorative Learn More link */}
                                    <div className="text-pink-500 font-semibold text-xs inline-flex items-center gap-1 cursor-pointer hover:underline pt-2 border-t border-gray-800/60">
                                        Read Case Study <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default CaseStudiesBoard;