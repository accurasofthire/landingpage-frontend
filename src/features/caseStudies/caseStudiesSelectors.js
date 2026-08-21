import { createSelector } from '@reduxjs/toolkit';

export const selectCaseStudiesStatus = (state) => state.caseStudies.status;

export const selectCaseStudiesError = (state) => state.caseStudies.error;

export const selectCategoryFilter = (state) => state.caseStudies.filters.category;

export const selectQuery = (state) => state.caseStudies.filters.query;

export const selectCaseStudies = (state) => state.caseStudies.items;

export const selectFilteredCaseStudies = createSelector(
  [selectCaseStudies, selectCategoryFilter, selectQuery],
  (items, category, query) => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery =
        normalizedQuery === '' ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }
);

export const selectVisibleCount = createSelector(
  [selectFilteredCaseStudies],
  (filtered) => filtered.length
);