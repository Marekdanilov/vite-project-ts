import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth.tsx'
import Help from './pages/Help.tsx'
import Home from './pages/Home.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App