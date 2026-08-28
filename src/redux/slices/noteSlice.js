

import {createSlice} from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState: {
        note: []
    },
    reducers: {
        createNote: (state, action) => {
            state.note.push(action.payload)
        }
    }
})

export default noteSlice.reducer;

export const {createNote} = noteSlice.actions;