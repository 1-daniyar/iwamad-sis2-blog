import { Link, useParams } from 'react-router'
import { LikeButton } from '../components/LikeButton'
import { posts } from '../data/posts'

export function PostPage() {
  // useParams() gives the :id from the URL as a string, so we convert it to a number.
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  // No post with this id -> show a clear message instead of a blank page.
  if (post === undefined) {
    return (
      <section className="notice">
        <h1>Post not found</h1>
        <p>There is no post with the id "{id}".</p>
        <Link to="/posts" className="button">
          Back to all posts
        </Link>
      </section>
    )
  }

  return (
    <article className="post">
      <p className="meta">
        <span className="tag">{post.tag}</span> {post.date} · {post.readingMinutes} min read
      </p>
      <h1>{post.title}</h1>
      {post.body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="card-actions">
        <LikeButton post={post} />
        <Link to="/posts" className="read-more">
          ← All posts
        </Link>
      </div>
    </article>
  )
}
