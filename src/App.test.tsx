import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from './App'
import { posts } from './data/posts'
import { AuthProvider } from './state/AuthContext'
import { LikesProvider } from './state/LikesContext'

// Render the whole blog starting at any URL.
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}

describe('posts list', () => {
  it('shows one card for every post in the array', () => {
    renderAt('/posts')
    expect(screen.getAllByRole('article')).toHaveLength(posts.length)
    for (const post of posts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })

  it('opens a single post on /posts/<id>', () => {
    renderAt('/posts/2')
    expect(screen.getByRole('heading', { level: 1, name: posts[1].title })).toBeInTheDocument()
  })
})

describe('like button', () => {
  it('changes when clicked and does not touch other posts', async () => {
    const user = userEvent.setup()
    renderAt('/posts')

    const cards = screen.getAllByRole('article')
    const firstButton = within(cards[0]).getByRole('button')
    const secondButton = within(cards[1]).getByRole('button')

    expect(firstButton).toHaveAttribute('aria-pressed', 'false')
    expect(firstButton).toHaveTextContent(`Like · ${posts[0].baseLikes}`)

    await user.click(firstButton)

    expect(firstButton).toHaveAttribute('aria-pressed', 'true')
    expect(firstButton).toHaveTextContent(`Liked · ${posts[0].baseLikes + 1}`)
    expect(secondButton).toHaveAttribute('aria-pressed', 'false')

    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-pressed', 'false')
  })
})

describe('route protection', () => {
  it('shows the sign-in page when signed out', () => {
    renderAt('/favorites')
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Your favorites' })).not.toBeInTheDocument()
  })

  it('opens the protected page after signing in and locks it again after signing out', async () => {
    const user = userEvent.setup()
    renderAt('/favorites')

    await user.click(screen.getByRole('button', { name: 'Sign in as reader' }))
    expect(screen.getByRole('heading', { name: 'Your favorites' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sign out' }))
    await user.click(screen.getByRole('link', { name: 'Favorites' }))
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
  })
})

describe('404 pages', () => {
  it('shows the custom 404 page inside the layout for an unknown URL', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: 'This page does not exist' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to the home page' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('shows a clear message for a post id that does not exist', () => {
    renderAt('/posts/999')
    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
  })
})
