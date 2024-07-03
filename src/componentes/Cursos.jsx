import React from 'react'
import NombreCurso from './NombreCurso'
import Opciones from './Opciones'
import './Cursos.css'

const Cursos = () => {
  return (
    <div className='cursos'>
        <NombreCurso/>
        <Opciones/>

    </div>
  )
}

export default Cursos