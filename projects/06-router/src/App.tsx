import { HashRouter, Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
