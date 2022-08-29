import { configureStore } from "@reduxjs/toolkit";

// Import Reducer
import postsReducer from '../features/posts/postsSlice.js'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})