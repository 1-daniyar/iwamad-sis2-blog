import { createContext, useContext } from 'react'

export interface LikesState {
  /** ids of the posts the reader has liked */
  likedIds: number[]
  isLiked: (postId: number) => boolean
  toggleLike: (postId: number) => void
}

export const LikesContext = createContext<LikesState | null>(null)

export function useLikes(): LikesState {
  const value = useContext(LikesContext)
  if (value === null) {
    throw new Error('useLikes must be used inside <LikesProvider>')
  }
  return value
}
