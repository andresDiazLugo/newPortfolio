import {project} from "./projectModel"
import {BiLinkAlt} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
export default function Projects() {
  return (
    <div className="containerProject">
          <h2>My Projects</h2>
          <div className="Projects">
              {   
                  project.map((e)=>{
                      return <li  key={e.id}>
                                  <div className="containerImg"><img src={e.img} loading="lazy"/></div>
                                  <h3>{e.title}</h3>
                                  <div className="containerLinks">
                                      <a href={e.deploy} target="_blank" > <i><BiLinkAlt size="2.4rem" color="blue"/></i> </a> 
                                      <a href={e.gitHub} target="_blank" > <i><BsGithub size="2rem" color="black"/></i>  </a>
                                  </div>
                                  <div className="containerTecnology">
                                    {e.tecnology.map((tecnology)=><span>{tecnology}</span>)}
                                  </div>
                            </li>
                  })
              }

          </div>

    </div>
  )
}
