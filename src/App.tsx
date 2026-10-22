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
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />

        <Route element={<ProtectedRoute />}>
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
