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

  }
})

export default postsSlice.reducer