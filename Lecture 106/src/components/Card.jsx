import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
      <img src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' width={300} style={{border: "2px solid black"}}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      
    </div>
  )
}

export default Card
