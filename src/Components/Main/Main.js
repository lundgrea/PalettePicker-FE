import React from 'react'
import './Main.css'

import ColorsContainer from '../ColorsContainer/ColorsContainer'
import PaletteForm from '../PaletteForm/PaletteForm'
import Header from '../Header/Header'


const Main = () => {
  return (
    <main className="Main">
      <Header />
      <ColorsContainer />
      <PaletteForm />
    </main>
  )
}

export default Main
