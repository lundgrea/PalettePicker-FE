import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsContainer.css'

const ColorsContainer = (props) => {
  console.log("ColorsContainer props --->", props)
  const allColors = props.currentPalette.map(swatch => {
    return (
      <ColorCard
      color={swatch.color}
      isLocked={swatch.isLocked}
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
