import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.tsx'
import Blog from './pages/Blog.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App