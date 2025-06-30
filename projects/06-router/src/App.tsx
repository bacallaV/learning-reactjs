import { HashRouter, Route, Routes } from 'react-router-dom'

import { AuthGuard, AuthProvider } from './contexts/auth'
import { BlogPostProvider } from './contexts/blog-post'

import { Menu } from './components/Menu'

import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <BlogPostProvider>
            <Menu />

            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route
                path="/profile"
                element={
                  <AuthGuard>
                    <ProfilePage />
                  </AuthGuard>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <AuthGuard>
                    <LogoutPage />
                  </AuthGuard>
                }
              />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </BlogPostProvider>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
