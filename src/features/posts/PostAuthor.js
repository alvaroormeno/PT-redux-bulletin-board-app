import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = () => {
  // save initial state from usersSlice
  const users = useSelector(selectAllUsers)

  // find the author
  const author = users.find(user => user.id === userId);


  return (
    <span>
      by {author ? author.name : 'Unknown Author'}
    </span>
  )
}

export default PostAuthor 