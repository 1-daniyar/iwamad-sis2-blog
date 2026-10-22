import { Link } from 'react-router'
import type { Post } from '../data/posts'
import { formatDate } from '../format'
import { LikeButton } from './LikeButton'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <p className="meta">
        <span className="tag">{post.tag}</span> {formatDate(post.date)} · {post.readingMinutes} min read
      </p>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <div className="card-actions">
        <LikeButton post={post} />
        <Link to={`/posts/${post.id}`} className="read-more">
          Read post →
        </Link>
      </div>
    </article>
  )
}
