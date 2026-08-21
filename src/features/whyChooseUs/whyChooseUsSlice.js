import { createSlice } from '@reduxjs/toolkit';

const features = [
  {
    id: 'senior-engineers',
    title: 'Senior Engineers',
    desc: 'Top 5% vetted developers with real production experience.',
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    desc: 'Quick onboarding and rapid execution to meet your deadlines.',
  },
  {
    id: 'scalable-teams',
    title: 'Scalable Teams',
    desc: 'Easily scale up or down based on your project requirements.',
  },
  {
    id: 'secure-by-design',
    title: 'Secure by Design',
    desc: 'Security-first development to protect your data and users.',
  },
];

const initialState = {
  items: features,
  activeFeatureId: 'senior-engineers',
};

const whyChooseUsSlice = createSlice({
  name: 'whyChooseUs',
  initialState,
  reducers: {
    setActiveFeature: (state, action) => {
      state.activeFeatureId = action.payload;
    },
  },
});

export const { setActiveFeature } = whyChooseUsSlice.actions;

export default whyChooseUsSlice.reducer;