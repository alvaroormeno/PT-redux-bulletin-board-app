import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: ' Ive heard things about redux'
  },
  {
    id: '2',
    title: 'Slices...',
    content: ' Ive heard things about slices!'
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

// Create selector to export and be used in components, this way if the state ever changed we only need to change this selector and not the selector inside every component.
export const selectAllPosts = (state) => state.posts;

// Export actons
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer