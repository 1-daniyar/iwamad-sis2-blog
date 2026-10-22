import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../state/AuthContext'

// A layout route that checks the reader BEFORE it shows its pages.
// Signed in  -> <Outlet /> shows the protected page.
// Signed out -> <Navigate> sends the reader to the sign-in page.
export function ProtectedRoute() {
  const { signedIn } = useContext(AuthContext)

  if (!signedIn) {
    return <Navigate to="/signin" replace />
  }
  return <Outlet />
}
