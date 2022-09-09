import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const favoriteBooksSlice = createSlice({
    name: 'favorite books',
    initialState: {
        favoriteBooksList: ['em', 'bola']
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteBooksList.push(action.payload.id)
            console.log('Book Added ', action.payload.id)
        },
        removeFavorite: (state, action) => {
            console.log('Book Removed ', action.payload.id)
        }
    }
})
export const removeFavorite = favoriteBooksSlice.actions.removeFavorite
export const addFavorite = favoriteBooksSlice.actions.addFavorite
export default favoriteBooksSlice.reducer