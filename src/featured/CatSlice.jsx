import { createSlice } from "@reduxjs/toolkit";
import  img  from '../data' //IMPORTANT

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    category: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    }
  }
  
})
export const { setCategory } = dataSlice.actions;

export default dataSlice.reducer;