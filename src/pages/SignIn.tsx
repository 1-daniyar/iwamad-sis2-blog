import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../state/AuthContext'

export function SignIn() {
  const { signedIn, signIn } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSignIn() {
    signIn()
    navigate('/favorites') // go to the protected page
  }

  if (signedIn) {
    return (
      <section className="notice">
        <h1>You are signed in</h1>
        <p>You can open the Favorites page now.</p>
      </section>
    )
  }

  return (
    <section className="notice">
      <h1>Sign in</h1>
      <p>
        The Favorites page is for signed-in readers only. This demo has no passwords: press the
        button to sign in.
      </p>
      <button type="button" className="button" onClick={handleSignIn}>
        Sign in as reader
      </button>
    </section>
  )
}
