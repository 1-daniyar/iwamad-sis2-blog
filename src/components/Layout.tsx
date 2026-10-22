import { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { AuthContext } from '../state/AuthContext'

// The layout route: header and footer stay, <Outlet /> is replaced by the current page.
export function Layout() {
  const { signedIn, signOut } = useContext(AuthContext)

  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="brand">
          Demarch Journal
        </Link>
        <nav aria-label="Main">
          {/* NavLink adds the class "active" to the link of the current page.
              "end" means: active only on exactly this URL. */}
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/posts" end>
            Posts
          </NavLink>
          <NavLink to="/favorites" end>
            Favorites
          </NavLink>
          <NavLink to="/contact" end>
            Contact
          </NavLink>
          {signedIn ? (
            <button type="button" className="link-button" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <NavLink to="/signin" end>
              Sign in
            </NavLink>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2026 Daniyar Ospanov · Built with React, TypeScript and React Router</p>
      </footer>
    </div>
  )
}
