import { useState,useRef, useEffect, ElementType } from 'react'
import Nav from './components/Nav/Nav'
import Cloud from './components/Cloud/Cloud'
import './App.scss'



function App() {

  return (
    
    <div className='App'>
      <Nav/>

      <Cloud/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus mollitia totam et aspernatur, reprehenderit sit nulla aliquid dolore fugit temporibus? Molestias numquam ratione autem in est doloribus eum perspiciatis!</p>
   
   
   
   
   
    </div>
    
    
  )
}

export default App
