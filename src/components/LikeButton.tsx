import { useContext } from 'react'
import type { Post } from '../data/posts'
import { LikesContext } from '../state/LikesContext'

interface LikeButtonProps {
  post: Post
}

export function LikeButton({ post }: LikeButtonProps) {
  const { likedIds, toggleLike } = useContext(LikesContext)
  const liked = likedIds.includes(post.id)
  const count = liked ? post.baseLikes + 1 : post.baseLikes

  return (
    <button
      type="button"
      className={liked ? 'like-button liked' : 'like-button'}
      aria-pressed={liked}
      onClick={() => toggleLike(post.id)}
    >
      {liked ? '♥ Liked' : '♡ Like'} · {count}
    </button>
  )
}
