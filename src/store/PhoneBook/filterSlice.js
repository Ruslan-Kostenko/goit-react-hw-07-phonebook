import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { 
    changeFilter: (state, action) => state = `${action.payload}` },
});

export const getFilter = state => state.filter;
export const {changeFilter} = filterSlice.actions;