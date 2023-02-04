import { useState,useRef, useEffect, ElementType } from 'react'
import Nav from './components/Nav/Nav'
import Cloud from './components/Cloud/Cloud'
import Gallery from './components/Gallery/Gallery'
import Projects from './components/Projects/Projects'
import Whatsap from './components/Whatsap/Whatsap'
import Contact from './components/Contact/Contact'
import './App.scss'



function App() {

  return (
    
    <div className='App'>
      <Nav/>

      <Cloud/>

      <Gallery/>

      <Projects/>

      <Whatsap/>

      <Contact/>
    </div>
    
    
  )
}

export default App
