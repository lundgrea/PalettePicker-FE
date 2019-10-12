import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsContainer.css'

const ColorsContainer = (props) => {
  const allColors = props.currentPalette.map(swatch => {
    return (
      <ColorCard
      color={swatch.color}
      isLocked={swatch.isLocked}
      toggleLock={props.toggleLock}
      />
    )
  })
  return (
    <section className="ColorsContainer">
      {allColors}
    </section>
  )
}

export default ColorsContainer;
