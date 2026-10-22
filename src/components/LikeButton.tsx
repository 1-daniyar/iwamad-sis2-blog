import type { Post } from '../data/posts'
import { useLikes } from '../state/likes'

interface LikeButtonProps {
  post: Post
}

export function LikeButton({ post }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikes()
  const liked = isLiked(post.id)
  const count = post.baseLikes + (liked ? 1 : 0)

  return (
    <button
      type="button"
      className={liked ? 'like-button liked' : 'like-button'}
      aria-pressed={liked}
      onClick={() => toggleLike(post.id)}
    >
      <span aria-hidden="true">{liked ? '♥' : '♡'}</span> {liked ? 'Liked' : 'Like'} · {count}
    </button>
  )
}
