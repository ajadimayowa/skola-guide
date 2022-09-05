import { createSlice } from '@reduxjs/toolkit'
import Departments from '../../data/Departments';
import Subjects from '../../data/Subjects';
import Books from '../../data/Books'

const BookDetailSlice = createSlice({
    name: 'book data',
    initialState: {
        departments: Departments,
        subjects: Subjects,
        books: Books
    }
})

export default BookDetailSlice.reducer 