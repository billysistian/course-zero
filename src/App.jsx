import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'
import TestimonialPage from './pages/TestimonialPage'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={ HomePage }/>
        <Route path="/kelas" Component={ KelasPage }/>
        <Route path="/testimonial" Component={ TestimonialPage }/>
        <Route path="/faq" Component={ FaqPage }/>
        <Route path="/syaratketentuan" Component={ SyaratKetenPage }/>
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
