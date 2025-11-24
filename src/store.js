import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './redux/noteSlice.js'

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
})