import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../state/auth'

// A layout route that checks the reader before it renders its <Outlet />.
// Signed out -> <Navigate> sends the reader to the sign-in page and
// remembers where they wanted to go.
export function ProtectedRoute() {
  const { signedIn } = useAuth()
  const location = useLocation()

  if (!signedIn) {
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />
  }
  return <Outlet />
}
