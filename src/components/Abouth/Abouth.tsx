import {useEffect} from 'react'
import avatar1 from "../../assets/avatar1.webp"
import avatar2 from "../../assets/avatar2.webp"
import avatar3 from "../../assets/avatar3.webp"




export default function Abouth() {
    useEffect(()=>{
        let containerComponetsAbouth:any = window.document.querySelector(".componentAbout")
        let subContainerAbouth:any = window.document.querySelector(".subContainer")
        setTimeout(()=>{
            containerComponetsAbouth.style.width = "100%"
            subContainerAbouth.style.transform= "translate(0px,0px)"
        setTimeout(()=>{
            subContainerAbouth.style.color= "black"
        },1500)
        },100)

        return ()=>{
            containerComponetsAbouth.style.width = "0"
        }
    },[])
  return (
        <article className="componentAbout">
            <div className='subContainer'>
                <div>
                    <img src={avatar1}/>
                    <p>
                        Hi mi name is Alberto Diaz Lugo, in the year 2016 
                        Enter the career of technique in analysis of computer systems,
                        I studied the race for three years, in the race I learned 
                        manage software projects, programming with delphi language and database,
                        In 2019 I graduated as a systems analyst technician and also as a programmer analyst,
                        In this career I was driven by the love for web development,one of my favorite hobbies is gym and programming
                    </p>
                </div>
                <h3>Experience</h3>
                <div>

                    <img src={avatar2}/>
                    <ul>
                        <li>
                            <p>
                            As a professional practice in my career, I developed a desktop app for customer management
                            and sales for Malvinas uniforms, which was a company that sold uniforms for schools, colleges, etc.
                            </p>
                        </li>
                        <li>
                            <p>
                            between 2020 I started a venture with a partner who focused on the creation of web pages
                            We develop web pages focused on restaurants, gyms and hairdressers.
                            </p>
                        </li>
                        <li>
                            <p>      
                            In 2022, in my Henry course,
                            a web app was made that consisted of a virtual wallet
                            </p>
                        </li>
                    </ul>
                      
                </div>
                <h3>Education</h3>
                <div >
                    <img src={avatar3}/>
                    <div className='containerEducation'>
                        <div className='subContainerEducation'>
                            <h4>Title: Tecnico Superior Analista de Sistemas</h4>
                            <h4>Institute: Instituo Terciario Superior del Milagro</h4>    
                            <img src='data:image/png;base64,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'/>
                        </div>
                        <div className='subContainerEducation'>
                            <h4>Title: Developer Full Stack</h4>
                            <h4>Institute: Henry</h4>    
                            <img src='https://i.ytimg.com/vi/iclPAx8jMOA/mqdefault.jpg'/>
                        </div>
                    </div>
                </div>

            </div>
        </article>
  )
}
