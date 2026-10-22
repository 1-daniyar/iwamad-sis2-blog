import { useContext } from 'react'
import { Link } from 'react-router'
import { PostCard } from '../components/PostCard'
import { posts } from '../data/posts'
import { LikesContext } from '../state/LikesContext'

// Protected page: App.tsx puts it inside <ProtectedRoute />.
export function Favorites() {
  const { likedIds } = useContext(LikesContext)
  const likedPosts = posts.filter((post) => likedIds.includes(post.id))

  return (
    <section>
      <h1>Your favorites</h1>
      {likedPosts.length === 0 ? (
        <p className="lead">
          You have not liked any posts yet. Open <Link to="/posts">the posts</Link> and press Like.
        </p>
      ) : (
        <div className="grid">
          {likedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  )
}
