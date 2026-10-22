import { Link, NavLink, Outlet } from 'react-router'
import { useAuth } from '../state/auth'

const links = [
  { to: '/', label: 'Home' },
  { to: '/posts', label: 'Posts' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const { signedIn, signOut } = useAuth()

  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="brand">
          Demarch Journal
        </Link>
        <nav aria-label="Main">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end>
              {link.label}
            </NavLink>
          ))}
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
