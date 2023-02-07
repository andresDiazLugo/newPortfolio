import { useState,useRef, useEffect, ElementType } from 'react'
import Nav from './components/Nav/Nav'
import HomePath from './components/HomePath/HomePath'
import Whatsap from './components/Whatsap/Whatsap'
import AboutPath from './components/AbouthPath/AboutPath'
import {Routes,Route} from "react-router-dom"
import './App.scss'



function App() {

  return (
    
    <div className='App'>
      <Nav/>
      <Whatsap/>
      <Routes>
        <Route path="/" element={<HomePath/>}/>
        <Route path='/about' element={<AboutPath/>}/>
      </Routes>
      
           
    </div>
  )
}

export default App
