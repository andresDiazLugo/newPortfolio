import {useEffect} from 'react';
import cloud1 from "../../assets/cloud1.webp"
import cloud3 from "../../assets/cloud3.webp"
import cloud4 from "../../assets/cloud4.webp"


export default function Cloud() {

  let elementSol:Element
  const cargarImagen =(entradas:any,obserbador:any)=>{
    
    const n1:any = document.querySelector("#n1")  
    const n2:any = document.querySelector("#n2") 
    const n3:any  = document.querySelector("#n3")
    const n4:any = document.querySelector("#n4") 

    if(entradas[0].isIntersecting){
     
          n1.style.transform = "translate(-1800px,-300px)"
          n2.style.transform = "translate(-300px,-100px)"
          n3.style.transform = "translate(30%,-100px)"
          n4.style.transform = "translate(30%,200px)"
          elementSol.classList.add("sol--size")
        }else{

          n1.style.removeProperty("transform")
          n2.style.removeProperty("transform")
          n3.style.removeProperty("transform")
          n4.style.removeProperty("transform")
          elementSol.classList.remove("sol--size")
        }
        
        }
    
    // })
  

  const observer = new IntersectionObserver(cargarImagen ,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  })

useEffect(()=>{
  const element = document.querySelector(".sol")
  if(element){
    elementSol = element
    observer.observe(elementSol)
  }
},[])
    
  return (
  
     <div className='cloud'>
        <div className="container">
          <div className='sol'></div>
          <img id='n1' src={cloud1} loading="lazy" alt='cloud-1'/>
          <img id='n2' src={cloud1} loading="lazy" alt='cloud-2'/>
          <img id='n3' src={cloud3} loading="lazy" alt='cloud-3'/>
          <img id='n4' src={cloud4} loading="lazy" alt='cloud-4'/> 
        </div>
      </div>
  )
}
