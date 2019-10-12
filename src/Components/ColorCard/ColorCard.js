import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  return (
    <section className="ColorCard" style={{backgroundColor: props.color}}>
      <p>{props.color}</p>
    </section>
  )
}

export default ColorCard;
