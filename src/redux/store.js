
import {configureStore} from '@reduxjs/toolkit'

import noteSlice from '../redux/slices/noteSlice'

export default configureStore({
    reducer: {
        noteReducer: noteSlice
    }
})