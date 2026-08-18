import { createSelector } from '@reduxjs/toolkit';

const selectWhyChooseUsState = (state) => state.whyChooseUs;

export const selectAllFeatures = createSelector(
    [selectWhyChooseUsState],
    (state) => state.features
);

export const selectActiveFeatureId = createSelector(
    [selectWhyChooseUsState],
    (state) => state.activeFeatureId
);