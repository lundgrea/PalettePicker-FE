import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  return (
    <section className="ColorCard" style={{backgroundColor: props.color}}>
      <p>{props.color}</p>
      <button onClick={e => props.toggleLock(e, props.color)}>Lock Button</button>
    </section>
  )
}

export default ColorCard;
