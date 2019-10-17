import React from 'react'
import './Main.css'
import ColorsContainer from '../ColorsContainer/ColorsContainer'
import PaletteForm from '../PaletteForm/PaletteForm'
import PaletteContainer from '../PaletteContainer/PaletteContainer'
import Header from '../Header/Header'
import PropTypes from 'prop-types'



const Main = (props) => {
  return (
    <main className="Main">
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

export default Main;

Main.propTypes = {
  addNewPalette: PropTypes.func,
  clearFolderID: PropTypes.func,
  currentPalette: PropTypes.array,
  deleteAPalette: PropTypes.func,
  folderID: PropTypes.string,
  folders: PropTypes.array,
  generateRandomColors: PropTypes.func,
  isLoading: PropTypes.bool,
  palettes: PropTypes.array,
  toggleLock: PropTypes.func
} 
