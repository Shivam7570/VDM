import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

