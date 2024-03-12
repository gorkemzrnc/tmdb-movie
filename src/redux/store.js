import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from "./movies/moviesSlice"
import configSlice from './configSlice'

export default configureStore({
  reducer: {
    movies: moviesSlice,
    config: configSlice,
  }
})