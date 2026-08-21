import { createSlice } from '@reduxjs/toolkit';
import { fetchCaseStudies } from './caseStudiesApi';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  filters: {
    category: 'All',
    query: '',
  },
};

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
    setQuery: (state, action) => {
      state.filters.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Network failed';
      });
  },
});

export const { setCategoryFilter, setQuery } = caseStudiesSlice.actions;

export default caseStudiesSlice.reducer;