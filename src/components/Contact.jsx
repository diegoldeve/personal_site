import React, { useState } from 'react'
import email from '../assets/email.png'
import '../contact.css'
const Contact = () => {

  const [nombre, setNombre] = useState('')
  const [correoSend, setCorreoSend] = useState('')
  const [correoReceive, setCorreoReceive] = useState('diegoldeve@gmail.com')
  const [asunto, setAsunto] = useState('')
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false)

  function handleEnvio(e){
    e.preventDefault();
    if([nombre, correoSend, asunto].includes('')){
      setError(true)
      setTimeout(()=>{
        setError(false)
      },2000)
      return
    }
    setNombre('')
    setCorreoSend('')
    setAsunto('')
    setEnviado(true);
    setTimeout(()=>{
      setEnviado(false)
    },2000)
  }

  return (
    <div id='contact'>
      <h1 className='title'>Contact</h1>
      <img src={email} alt="" className='email'/>
      <button>
        <a href="mailto:diegoldeve@gmail.com?Subject=Me%20gustarían%20tus%20servicios%20:)" style={{color:'black'}}>diegoldeve@gmail.com</a>
      </button>
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export {Contact}
