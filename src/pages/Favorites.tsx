import { Link } from 'react-router'
import { PostCard } from '../components/PostCard'
import { posts } from '../data/posts'
import { useLikes } from '../state/likes'

// Protected page: only reachable when signed in (see ProtectedRoute).
export function Favorites() {
  const { likedIds } = useLikes()
  const liked = posts.filter((post) => likedIds.includes(post.id))

  return (
    <section>
      <h1>Your favorites</h1>
      {liked.length === 0 ? (
        <p className="lead">
          You have not liked any posts yet. Open <Link to="/posts">the posts</Link> and press the
          heart.
        </p>
      ) : (
        <div className="grid">
          {liked.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  )
}
