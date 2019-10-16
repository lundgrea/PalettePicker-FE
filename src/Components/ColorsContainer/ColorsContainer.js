import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsContainer.css'

const ColorsContainer = (props) => {
  const allColors = props.currentPalette.map((swatch, index) => {
    return (
      <ColorCard
      name={swatch.name ? <h2 id="savedPaletteName">{swatch.name}</h2> : undefined}
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
      {props.deleteAPalette ? <img 
      id="palette_delete"
      alt="palette_delete"
      className="palette_delete"
      src={require('../../assets/delete.svg')}
      onClick={(e) => props.deleteAPalette(e, props.id, props.folderID)}/> : undefined}
      {props.paletteName ? <h2 id="savedPaletteName">{props.paletteName}</h2> : undefined}
      {allColors}
    </section>
  )
}

export default ColorsContainer;
