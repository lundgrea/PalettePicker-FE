import React from 'react'
import './Main.css'
import ColorsContainer from '../ColorsContainer/ColorsContainer'
import PaletteForm from '../PaletteForm/PaletteForm'
import Header from '../Header/Header'


const Main = (props) => {
  return (
    <main className="Main">
      <Header />
      <ColorsContainer currentPalette={props.currentPalette} toggleLock={props.toggleLock}/>
      <PaletteForm generateRandomColors={props.generateRandomColors}/>
    </main>
  )
}

export default Main
