import React from 'react'
import './Main.css'
import ColorsContainer from '../ColorsContainer/ColorsContainer'
import PaletteForm from '../PaletteForm/PaletteForm'
import PaletteContainer from '../PaletteContainer/PaletteContainer'
import Header from '../Header/Header'
import { thisExpression } from '@babel/types'


const Main = (props) => {
  return (
    <main className="Main">
      {props.error && <h4>{props.error}</h4>}
      {props.networkMessage && <h4>{props.networkMessage}</h4>}
      <Header clearFolderID={props.clearFolderID}/>
      {!props.folderID &&
      <ColorsContainer
      folders={props.folders} 
      palettes={props.palettes}
      currentPalette={props.currentPalette} 
      toggleLock={props.toggleLock}
      folderID={props.folderID}
      /> 
      }
      {!props.folderID &&
      <PaletteForm
      currentPalette={props.currentPalette} 
      generateRandomColors={props.generateRandomColors}
      folders={props.folders}
      isLoading={props.isLoading}
      addNewPalette={props.addNewPalette} 
      />
      }
       
      {props.folderID && <PaletteContainer 
        palettes={props.palettes}
        currentPalette={props.currentPalette} 
        folderID={props.folderID}
        deleteAPalette={props.deleteAPalette}
      />}
    </main>
  )
}

export default Main
