import { createSlice } from '@reduxjs/toolkit'

const favoriteBooksSlice = createSlice({
    name: 'favorite books',
    initialState: {
        favoriteBooksid: ['mayo', 'bukky']
    },

    reducers: {
        addToFavorite: (state, action) => {
            console.log(action.payload.id)
        },

        removeFromFavorite: (state) => {
            console.log('Removed from favorites')
        }
    }
})

export const addBookToFavorite = favoriteBooksSlice.actions.addToFavorite
export const removeBookFromFavorite = favoriteBooksSlice.actions.removeFromFavorite
export default favoriteBooksSlice.reducer