import { PostCard } from '../components/PostCard'
import { posts } from '../data/posts'

export function Posts() {
  return (
    <section>
      <h1>All posts</h1>
      <p className="lead">{posts.length} posts so far.</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
