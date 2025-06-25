import { HashRouter, Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { AuthProvider } from './contexts/auth'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
