import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './featured/CatSlice'

const store = configureStore({
  reducer: {
    data:dataReducer,
  }
})

export default store;