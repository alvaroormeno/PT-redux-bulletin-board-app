import React from 'react'
import { useDispatch } from 'react-redux'


import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '💛',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({post }) => {

  const dispatch = useDispatch()

  // map to render emojis as buttons. 
  // We are mapping rectionEmoji which is an object with various key: value so we use object.entries
  // The key is the name and the value is the emoji
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className='reactionButton'
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}

      >
        {emoji} {post.reactions[name]}
      </button>
      )
  })

  return (
    <div>{reactionButtons}</div> 
  )
}

export default ReactionButtons