import axios from 'axios'
import React, {useState, useEffect } from 'react'

export const Productos = () => {

    
    const [users, setUsers] = useState([])

    useEffect(()=>{
      getUser( )
    },[])

    const getUser = () => {
      axios.get('http://localhost:8000')
      .then(resp => {
         setUsers(resp.data.data)
      })
    }
 

  return (
    <div className='container mt-5'>
      <h1>Lista de Productos</h1>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
           
            
          </tr>
        </thead>

        <tbody>
          {
            users.map(user =>(
              <tr key={user}>
                <td>{user.codigo}</td>
                <td>{user.nombre}</td>
                <td>{user.precio}</td>
                <td>
                  {user.stock}
                  </td>                        
              </tr>
            ))
          }

              
         
        </tbody>
      </table>
    </div>
  )
}
