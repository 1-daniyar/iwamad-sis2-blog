import { useState, type ReactNode } from 'react'
import { AuthContext } from './auth'

// "Signed in" is just one boolean kept in React state.
// There is no password and no server - real authentication comes later.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(false)

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn: () => setSignedIn(true),
        signOut: () => setSignedIn(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
