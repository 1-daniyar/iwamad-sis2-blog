import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Contact } from './pages/Contact'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { PostPage } from './pages/PostPage'
import { Posts } from './pages/Posts'
import { SignIn } from './pages/SignIn'

export default function App() {
  return (
    <Routes>
      {/* Layout route: header + footer stay, the page changes inside <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />

        {/* Protected route: pages inside it need the reader to be signed in */}
        <Route element={<ProtectedRoute />}>
          <Route path="favorites" element={<Favorites />} />
        </Route>

        {/* "*" matches every unknown URL -> custom 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
