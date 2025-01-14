import { createSlice } from '@reduxjs/toolkit';

interface ITemplateState {
  isLoaded: boolean;
}

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    isLoaded: false,
  },
  reducers: {
    setLoaded: (state: ITemplateState, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const selectState = (state: { template: ITemplateState }) => state.template;
export const { setLoaded } = templateSlice.actions;
export default templateSlice.reducer;
