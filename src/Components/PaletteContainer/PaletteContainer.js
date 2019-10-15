import React from 'react'
import './PaletteContainer.css'
import ColorsContainer  from '../ColorsContainer/ColorsContainer'

const PaletteContainer = (props) => {
  const reformattedPalettes = props.palettes.map(palette => {
    return {
      name: palette.name,
      id: palette.id,
      colors: [{color: palette.c1, isLocked: true}, {color: palette.c2, isLocked: true}, {color: palette.c3, isLocked: true}, {color: palette.c4, isLocked: true}, {color: palette.c5, isLocked: true}]
    }
  })

    const createPalettes = reformattedPalettes.map(palette => {
      return (
      <ColorsContainer
        paletteName={palette.name}
        currentPalette={palette.colors}
        folderID={props.folderID}
      />
      )
    })

    return (
      <article>
        {createPalettes}
      </article>
    )
}

export default PaletteContainer;

