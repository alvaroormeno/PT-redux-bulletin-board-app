import { createSlice, nanoid } from "@reduxjs/toolkit";


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

// Create the Counter Slice with 3 parameters
const postsSlice = createSlice({
  // Parameter 1 -> Slice name, used in action types
  name: 'posts',
  // Parameter 2 -> The iniitial state for the reducer
  initialState,
  // Parameter 3 -> Reducers object of "case reducers" / Here we name our different actions/reducer functions 
  reducers: {
    //OPTION 1
    // postAdded(state, action) {
    //   state.push(action.payload)
    // }

    // OPTION 2 - postAdded reducer function
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      //Prepare Callback function
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }
})

// Create selector to export and be used in components, this way if the state ever changed we only need to change this selector and not the selector inside every component.
export const selectAllPosts = (state) => state.posts;

// Export actons
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer