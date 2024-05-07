import React from 'react'
import emailjs from '@emailjs/browser'
import './Contacto.css'
import {  useForm } from 'react-hook-form'




export const Contacto = () => {
  
  const { register, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data)=>{
    console.log(data)
    
  }
  const senEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ldnryrn', 'template_h7y0jgb', event.target, 'IqGYLxN_RN9-wdBQA')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    
    <div onSubmit={handleSubmit(onSubmit)}>

      <form onSubmit={senEmail}>
        
        <div className="form-group"  >
            <label>Nombre</label>
            <input type="text" className="form-control" id="nombre" 
              {...register ("nombre", {
                required:true,
                maxLength:50
              })}
            />
            
            {errors.nombre?.type === 'required' && <p className='coment'>El campo nombre es requerido</p>}

        </div> 
        <div className="form-group">
            <label>Apellido</label>
            <input type="text" className="form-control" id="apellido" 
              {...register ("apellido", {
                required:true,
                maxLength:50
              })}
            />
            {errors.apellido?.type === 'required' && <p className='coment'>El campo apellido es requerido</p>}
        </div>
        <div className="form-group">
            <label>Telefono</label>
            <input type="number" className="form-control" id="number" 
              {...register ("telefono", {
                required:true,
                maxLength:50
              })}
            />
            {errors.telefono?.type === 'required' && <p className='coment'>El campo telefono es requerido</p>}
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
              {...register ("email", {
                required:true,
                maxLength:50
              })}
            />
            {errors.email?.type === 'required' && <p className='coment'>El campo email es requerido</p>}
        </div>
      
        
        <div className="form-group">
            <label>Dejanos tu consulta</label>
            <textarea className="form-control" id="consulta" rows="3" 
              {...register ("consulta", {
                required:true,
                maxLength:50
              })}
            >
              
              </textarea> <br />
              {errors.consulta?.type === 'required' && <p className='coment'>¿Cuál es tu consulta?</p>}
        </div>
        <button type="submit" className="btn btn-primary">Enviar datos</button>
        <button type="reset" className="btn btn-primary ms-4">Limpiar formulario</button>
          
      </form>
              
              

    </div>
    
  )
}
