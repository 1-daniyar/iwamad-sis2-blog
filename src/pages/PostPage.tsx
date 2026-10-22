import { Link, useParams } from 'react-router'
import { LikeButton } from '../components/LikeButton'
import { findPost } from '../data/posts'
import { formatDate } from '../format'

export function PostPage() {
  // useParams() always gives a string, so convert it before comparing.
  const { id } = useParams<{ id: string }>()
  const post = findPost(Number(id))

  if (post === undefined) {
    return (
      <section className="notice">
        <h1>Post not found</h1>
        <p>There is no post with the id "{id}". It may have been moved or never existed.</p>
        <Link to="/posts" className="button">
          Back to all posts
        </Link>
      </section>
    )
  }

  return (
    <article className="post">
      <p className="meta">
        <span className="tag">{post.tag}</span> {formatDate(post.date)} · {post.readingMinutes} min read
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
