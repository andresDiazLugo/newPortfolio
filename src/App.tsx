import { useState,useRef, useEffect, ElementType } from 'react'
import Nav from './components/Nav/Nav'
import Cloud from './components/Cloud/Cloud'
import Gallery from './components/Gallery/Gallery'
import './App.scss'



function App() {

  return (
    
    <div className='App'>
      <Nav/>

      <Cloud/>

      <Gallery/>
    </div>
    
    
  )
}

export default App
