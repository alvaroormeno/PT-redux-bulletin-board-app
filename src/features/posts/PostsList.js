import React from 'react'

// Import selector
import { selectAllPosts } from './postsSlice'

const PostsList = () => {

  // Use useSelector to select our initial state and save it to posts variable
  // Instead of using this: const posts = useSelector(state => state.posts), we created a selector inside postsSlice which we imported for best practice if we ever change the state inside postsSlice.js
  const posts = useSelector(selectAllPosts)

  //Map posts variable whis has the posts data from initial state
  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      // With substring we are getting the first 100 characters of the post, in other words a preview of the post content.
      <h3>{post.content.substring(0, 100)}</h3>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList