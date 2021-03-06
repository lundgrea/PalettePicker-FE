import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsContainer.css'
import PropTypes from 'prop-types';

const ColorsContainer = (props) => {
  const allColors = props.currentPalette.map((swatch, index) => {
    return (
      <ColorCard
      name={swatch.name || undefined}
      delete={props.deleteAPalette || null}
      folderID={props.folderID || null}
      key={index}
      color={swatch.color}
      isLocked={swatch.isLocked}
      toggleLock={props.toggleLock}
      id={swatch.id}
      />
    )
  })

  return (
    <section className='ColorsContainer'>
      {props.paletteName ? 
      <article id="paletteName-container">
        <h2 id="savedPaletteName">{props.paletteName}</h2>
        <img id="delete-palette-img"
        alt="trashcan icon" 
        src={require('../../assets/delete.svg')} 
        onClick={(e) => props.deleteAPalette(e, props.id, props.folderID)}/>
      </article>
      : 
      undefined}
      {allColors}
    </section>
  )
}

export default ColorsContainer;

ColorsContainer.propTypes = {
  currentPalette: PropTypes.array,
  folderID: PropTypes.number,
  palettes: PropTypes.array,
  toggleLock: PropTypes.func
} 