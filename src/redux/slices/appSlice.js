import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    likedMovies: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
      setLikedMovies: (state, action) => {
          console.log('ACTION: ', action.payload)
      state.likedMovies = [...state.likedMovies, action.payload]
    },
      removeLikedMovie: (state, action) => {
          const updatedLikedMovies = state.likedMovies.filter((movie) => movie.id !== action.payload.id)
          state.likedMovies = [...updatedLikedMovies]
    },
  },
})

export const { increment, setLikedMovies, removeLikedMovie } = appSlice.actions

export default appSlice.reducer