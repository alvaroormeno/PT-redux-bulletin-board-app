import { createSlice } from "@reduxjs/toolkit";

// Create an initial state
const initialState = [
  {id: '0', name: 'Dude Lebowski'},
  {id: '2', name: 'Neil Young'},
  {id: '3', name: 'Dave Gray'},
]

// Create the Counter Slice with 3 parameters
const usersSlice = createSlice({
  // Parameter 1 -> Slice name, used in action types
  name: 'users',
  // Parameter 2 -> The iniitial state for the reducer
  initialState,
   // Parameter 3 -> Reducers object of "case reducers" / Here we name our different actions
  reducers: {

  }
})

// Create selector to export and be used in components, this way if the state ever changed we only need to change this selector and not the selector inside every component.
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer

