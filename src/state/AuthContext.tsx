import { createContext, useState, type ReactNode } from 'react'

interface AuthValue {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

// A Context lets any component read the sign-in state without passing props down.
export const AuthContext = createContext<AuthValue>({
  signedIn: false,
  signIn: () => {},
  signOut: () => {},
})

// "Signed in" is just one boolean in React state. No password, no server.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(false)

  function signIn() {
    setSignedIn(true)
  }

  function signOut() {
    setSignedIn(false)
  }

  return <AuthContext.Provider value={{ signedIn, signIn, signOut }}>{children}</AuthContext.Provider>
}
