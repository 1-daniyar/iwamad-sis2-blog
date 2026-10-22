import { Link } from 'react-router'

export function NotFound() {
  return (
    <section className="notice">
      <p className="eyebrow">Error 404</p>
      <h1>This page does not exist</h1>
      <p>The address you typed does not lead anywhere on this blog.</p>
      <Link to="/" className="button">
        Back to the home page
      </Link>
    </section>
  )
}
