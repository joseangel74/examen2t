import React from 'react'
import Titulo from './Titulo'
import Cursos from './Cursos'
import './Card.css'

const Card = () => {
  return (
    <div className='Cuadro'>
        <Titulo/>
        <Cursos/>
    </div>
  )
}

export default Card