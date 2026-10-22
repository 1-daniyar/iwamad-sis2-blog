import { createContext, useState, type ReactNode } from 'react'

interface LikesValue {
  likedIds: number[] // ids of the posts the reader has liked
  toggleLike: (postId: number) => void
}

export const LikesContext = createContext<LikesValue>({
  likedIds: [],
  toggleLike: () => {},
})

// State is a list of liked post ids, so every post has its own like.
export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedIds, setLikedIds] = useState<number[]>([])

  function toggleLike(postId: number) {
    if (likedIds.includes(postId)) {
      // already liked -> remove it from the list
      setLikedIds(likedIds.filter((id) => id !== postId))
    } else {
      // not liked yet -> add it to the list
      setLikedIds([...likedIds, postId])
    }
  }

  return <LikesContext.Provider value={{ likedIds, toggleLike }}>{children}</LikesContext.Provider>
}
