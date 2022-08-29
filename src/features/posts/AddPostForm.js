import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { postAdded, selectAllPosts } from './postsSlice'

import { selectAllUsers } from '../users/usersSlice'


const AddPostForm = () => {
  const dispatch = useDispatch()

  // Component States
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  // Initial state from usersSlice saved to users variable
  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  }

  const onContentChanged = (e) => {
    setContent(e.target.value)
  }

  const onAuthorChanged = (e) => {
    setUserId(e.target.value)
  }

  const onSavePostClicked = () => {

    if(title && content) {
      dispatch( 
        // OPTION 1 
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content
        // }) 

        // OPTION 2
        postAdded(title, content, userId)
      )
      
      // Reset States
      setTitle("");
      setContent("");
    }
  }

  // Check to see if title, content and userId are true to enable or disable form button
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  // User Options
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))


  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        {/* TITLE */}
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text"
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />

        {/* USER OPTIONS */}
        <label htmlFor="postAuthor">Author:</label>
        <select id="postsAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        {/* CONTENT */}
        <label htmlFor="postContent">Content:</label>
        <textarea 
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />

        <button
          type='button'
          onClick={onSavePostClicked}
          // if can sabe is true, then disabled is false. 
          disabled={!canSave}
        >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm