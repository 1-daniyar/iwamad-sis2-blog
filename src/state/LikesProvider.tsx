import { useReducer, type ReactNode } from 'react'
import { LikesContext } from './likes'

type Action = { type: 'toggle'; postId: number }

// The state is a list of liked post ids. Each post is tracked separately,
// so liking one post never changes another.
function likesReducer(likedIds: number[], action: Action): number[] {
  switch (action.type) {
    case 'toggle':
      return likedIds.includes(action.postId)
        ? likedIds.filter((id) => id !== action.postId)
        : [...likedIds, action.postId]
  }
}

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedIds, dispatch] = useReducer(likesReducer, [])

  return (
    <LikesContext.Provider
      value={{
        likedIds,
        isLiked: (postId) => likedIds.includes(postId),
        toggleLike: (postId) => dispatch({ type: 'toggle', postId }),
      }}
    >
      {children}
    </LikesContext.Provider>
  )
}
