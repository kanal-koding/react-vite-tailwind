// import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import About from "./components/About"
import Projects from "./components/Projects"
import Products from "./components/Products"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Navbar />
      <Hero/>
      <Profile/>
      <About/>
      <Projects/>
      <Products/>
      <Contact/>
      <Footer/>
      {/* Other components and content go here */}
    </div>
    </>
  )
}

export default App
