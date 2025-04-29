import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth.tsx'
import Help from './pages/Help.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App