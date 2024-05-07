import axios from 'axios'
import React, {useState, useEffect } from 'react'

export const Productos = () => {

    
    const [users, setUsers] = useState([])

    useEffect(()=>{
      getUser( )
    },[])

    const getUser = () => {
      axios.get('https://reqres.in/api/users')
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
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
           
            
          </tr>
        </thead>

        <tbody>
          {
            users.map(user =>(
              <tr>
                <td>{user.id}</td>
                <td>{user.email}
                <p>Excelentes productos se los recomiendo</p>
                </td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} alt={user.avatar} />
                </td>                        
              </tr>
            ))
          }

              
         
        </tbody>
      </table>
    </div>
  )
}
