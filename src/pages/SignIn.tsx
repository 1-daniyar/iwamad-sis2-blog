import { Navigate, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../state/auth'

interface LocationState {
  from?: string
}

export function SignIn() {
  const { signedIn, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // If the reader came here from a protected page, send them back there.
  const from = (location.state as LocationState | null)?.from ?? '/favorites'

  if (signedIn) {
    return <Navigate to={from} replace />
  }

  function handleSignIn() {
    signIn()
    navigate(from, { replace: true })
  }

  return (
    <section className="notice">
      <h1>Sign in</h1>
      <p>
        The page you asked for is for signed-in readers only. This demo has no passwords: press
        the button to sign in.
      </p>
      <button type="button" className="button" onClick={handleSignIn}>
        Sign in as reader
      </button>
    </section>
  )
}
