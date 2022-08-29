import React from 'react'

const PostsList = () => {

  // Use useSelector to select our initial state and save it to posts variable
  const posts = useSelector(state => state.posts)

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