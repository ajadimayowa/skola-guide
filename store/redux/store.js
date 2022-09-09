import { configureStore } from '@reduxjs/toolkit';
import favoriteBooksSlice from '../redux/slices/favoriteBooksSlice'



export const store = configureStore({
    reducer: {
        favoriteBooks: favoriteBooksSlice
    }
})