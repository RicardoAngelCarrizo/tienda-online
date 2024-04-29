import { NavBar } from './components/NavBar/NavBar'
import { Inicio } from './components/Inicio/Inicio'
import { Productos } from './components/Nosotros/Productos'
import { Contacto } from './components/Contacto/Contacto'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'






function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Inicio/>}></Route>
          <Route exact path='/Inicio' element={<Inicio/>}></Route>
          <Route exact path='/Productos' element={<Productos/>}></Route>
          <Route exact path='/Contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
