import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img className="card-image" src="./public/card-image.jpg" alt="" />
        <h1>{props.title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste autem molestiae nostrum illum vel corrupti dolorum aperiam et blanditiis, quia, id, officia sint ea non. Corrupti iste architecto doloribus soluta.</p>
    </div>
  )
}

export default Card