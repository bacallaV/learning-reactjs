import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <div>Menu</div>

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
