import { useState } from 'react'

import './HomePage.css'
import FormularioCrearUsuario from "../../Components/PageBody/formulario"

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hola</h1>
     {/* <FormularioCrearUsuario/> */} {/* Provisional: solamente para ver el componente renderizado */}
    </>
  )
}

export default HomePage
