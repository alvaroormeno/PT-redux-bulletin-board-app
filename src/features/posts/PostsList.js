import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

// Import selector
import { selectAllPosts } from './postsSlice'

const PostsList = () => {

  // Use useSelector to select our initial state and save it to posts variable
  // Instead of using this: const posts = useSelector(state => state.posts), we created a selector inside postsSlice which we imported for best practice if we ever change the state inside postsSlice.js
  const posts = useSelector(selectAllPosts)

  // Here with slice we are creating a copy of the posts array and saving it to orderedposts
  // With sort, we are doing an a b comparing based on the date, locale compare will return a value of -1, 1 or 0 to so they can be sorted.
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  //Map posts variable whis has the posts data from initial state
  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      {/* With substring we are getting the first 100 characters of the post, in other words a preview of the post content. */}
      <h3>{post.content.substring(0, 100)}</h3>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
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