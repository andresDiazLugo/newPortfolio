import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <header className='Nav'>
        <nav className='container'>
            <Link to="/"><h1>Welcome Portfolio</h1></Link>
            <div>
            <Link to="/about"><p>About</p></Link> 
             <a href='https://github.com/andresDiazLugo' target="_blank">GitHub</a>
             <a href='https://www.linkedin.com/in/alberto-diaz-lugo-91b0a0239' target="_blank">Linkedin</a>
            </div>
        </nav>
    </header>
  )
}
