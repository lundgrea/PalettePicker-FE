import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsContainer.css'

const ColorsContainer = (props) => {
  const allColors = props.currentPalette.map((swatch, index) => {
    return (
      <ColorCard
      name={swatch.name ? <h2 id="savedPaletteName">{swatch.name}</h2> : undefined}
      key={index}
      color={swatch.color}
      isLocked={swatch.isLocked}
      toggleLock={props.toggleLock}
      />
    )
  })

  return (
    <section className='ColorsContainer'>
      {props.paletteName ? <article id="paletteName-container"><h2 id="savedPaletteName">{props.paletteName}</h2></article>: undefined}
      {allColors}
    </section>
  )
}

export default ColorsContainer;
