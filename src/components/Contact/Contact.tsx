import {useState} from "react"
import {ImWhatsapp} from "react-icons/im";
import {BsLinkedin} from "react-icons/bs"; 

interface Error {
    name:string,
    email:string
}

export default function Contact() {
const [date, setDate]  = useState(
    {
        name: "",
        email: "",
        write:""
    }
)
const [error, setError] = useState(
    {
        name:"",
        email:""
    }
)
const comprobationError = ({name, email}:Error)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error={
        email:"",
        name:""
    }
    
    if(! re.test(String(email).toLowerCase()) && email.length > 0){
        error.email = "insert a valid email" 
    }else{
        error.email = ""
    }
    return error
}

const handleWrite = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDate({
        ...date,
        [e.target.name] : e.target.value
    })
    if(e.target.name === "email"){
        setError(comprobationError({...date, email:e.target.value}))
    }
}
const sendDate = (e:React.FormEvent<HTMLFormElement>)=>{
    if(date.name === "" || date.write ===""){
        e.preventDefault()
       return alert("* fields are required")
        }
    // setDate({name:"", email:"", write:""})
}

  return (
    <div className="Contact">

        <form onSubmit={sendDate} action="mailto:andresd.ad5@gmail.com" method="post" name="form1">
            <div>
                <label htmlFor="nombre">Name: </label>
                <input autoComplete="off" onChange={handleWrite} id="nombre" name="name" value={date.name} type="text" />
                <span>*</span>
            </div>
              
            <div>
                <label htmlFor="email">Email: </label>
                <input autoComplete="off" onChange={handleWrite} className={error.email.length > 0 ? "changeInput": ""}id="email" name="email" value={date.email} type="text" />
                <span>*</span>
            </div>
            {error.email.length > 0 ? <p className="error">{error.email}</p> : null}
            <div className="writeMe">
                <h4>
                    Write Me  
                <span>  *</span>
                </h4>
                
                <textarea onChange={handleWrite} id="opinion" name="write" value={date.write}></textarea>
                <input  disabled={error.email.length > 0 ? true : false} name="sumbmit" type="submit" value="send"/>
            </div>
            <div className="contactsLinks">
                <a href="https://www.linkedin.com/in/alberto-diaz-lugo-91b0a0239/" target="_blank"><i><BsLinkedin color="#0A66C2" size="2.5rem"/></i></a>
                <a href='https://api.whatsapp.com/send?phone=5493876116914&text=nos%20gustaria%20concordar%20una%20entrevista%20con%20usted,%20ya%20que%20nos%20intereso%20su%20perfil'target="_blank"><ImWhatsapp color='green' size="2.5rem"/></a>
            </div>
            
        </form>

    </div>
  )
}
