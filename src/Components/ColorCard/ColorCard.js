import React from 'react'
import './ColorCard.css'
import PropTypes from 'prop-types';

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

ColorCard.propTypes = {
  color: PropTypes.string,
  delete: PropTypes.func,
  folderID: PropTypes.string,
  id: PropTypes.num,
  isLocked: PropTypes.bool,
  name: PropTypes.string,
  toggleLock: PropTypes.func
} 
