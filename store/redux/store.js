import { configureStore } from '@reduxjs/toolkit';
import bookDataSlice from './bookDataSlice';
import favoriteBooksSlice from './favoriteBooksSlice';


export const store = configureStore({
    reducer: {
        BookData: bookDataSlice,
        favoriteBooks: favoriteBooksSlice
    }
})