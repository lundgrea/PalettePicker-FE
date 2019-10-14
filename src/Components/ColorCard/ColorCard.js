import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  return (
    <section className="ColorCard">
      <div id="color-circle" style={{backgroundColor: props.color}}></div>
      <p id="hex-code">{props.color}</p>
      <img id="lock-img"
      src={!props.isLocked ? require('../../assets/unlocked.svg') : require('../../assets/locked.svg')} 
      onClick={e => props.toggleLock(e, props.color)}
      alt=""/>
    </section>
  )
}

export default ColorCard;
