import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import About from './Component/About'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Service from './Component/Service'
import CaseStudies from './Component/CaseStudies'
import RequestAudit from './Component/RequestAudit'
import { AuditProvider } from './context/AuditContext'

function App() {
  return (
    <AuditProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/request-audit" element={<RequestAudit />} />
      </Routes>
      <Footer />
    </AuditProvider>
  )
}

export default App
