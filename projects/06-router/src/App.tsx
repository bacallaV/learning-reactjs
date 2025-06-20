import { HashRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
