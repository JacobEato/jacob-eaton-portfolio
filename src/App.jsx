import { useState } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <FeaturedProjects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
