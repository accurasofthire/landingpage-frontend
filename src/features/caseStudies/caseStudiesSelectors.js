import { createSelector } from '@reduxjs/toolkit';

const selectCaseStudiesState = (state) => state.caseStudies;

export const selectAllCaseStudies = createSelector(
    [selectCaseStudiesState],
    (state) => state.items
);

export const selectCaseStudiesStatus = createSelector(
    [selectCaseStudiesState],
    (state) => state.status
);

export const selectCaseStudiesError = createSelector(
    [selectCaseStudiesState],
    (state) => state.error
);

export const selectCaseStudiesFilters = createSelector(
    [selectCaseStudiesState],
    (state) => state.filters
);

// Memoized selector for filtering case studies
export const selectFilteredCaseStudies = createSelector(
    [selectAllCaseStudies, selectCaseStudiesFilters],
    (items, filters) => {
        const { category, query } = filters;

        return items.filter((item) => {
            // 1. Filter by category
            const matchesCategory = category === "All" || item.category === category;

            // 2. Filter by case-insensitive search query on title or summary
            const normalizedQuery = query.toLowerCase().trim();
            const matchesQuery =
                !normalizedQuery ||
                item.title.toLowerCase().includes(normalizedQuery) ||
                item.summary.toLowerCase().includes(normalizedQuery);

            return matchesCategory && matchesQuery;
        });
    }
);

export const selectVisibleCount = createSelector(
    [selectFilteredCaseStudies],
    (filteredItems) => filteredItems.length
);
