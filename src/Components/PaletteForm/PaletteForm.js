import React, {Component} from 'react'
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm'
import './PaletteForm.css'

class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      folderID: '',
      error: ''
    }
  }

  generateNewColors = (e) => {
    e.preventDefault()
    this.props.generateRandomColors()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newPalette = {
      id: Date.now(),
      name: this.state.name,
      palettes: this.props.currentPalette
    }
    this.addNewPalette(newPalette);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({folderName: ""})
  }

  displayFolders = () => {
    console.log("paletteForm", this.props.folders.folders)
     return this.props.folders.folders.map(folder => {
      return <a id="folder-item">{folder.name}</a>
    })
  }


  render() {
  return (
    <section className="PaletteForm">
      <article id="generatePalette-container">
      <img id="palette-img"
      src={require('../../assets/paint-palette-white.svg')} 
      onClick={this.generateNewColors}
      alt=""/>
      <button id="generatePalette-button"
      onClick={this.generateNewColors}>
        Generate New Palette
      </button>
      </article>
      <article id="addNameSavePalette-container">
         {/* <img id="download-img"
        src={require('../../assets/download.svg')} 
        onClick={<SavePaletteForm folders={this.props.folders}/>}
        alt=""/>
        <button id="savePalette-button" onClick={<SavePaletteForm folders={this.props.folders}/>}>Save Current Palette</button> */}
        <label>Add Palette Name</label>
          <input
          id="paletteName-input"
          type="text"
          placeholder="Palette Name..."
          name="paletteName"
          value={this.state.paletteName}
          onChange={this.handleChange}
          required/>
          <div id="dropdown-container">
            <button id="dropdown-button">Save to Existing Folder</button>
            <div id="dropdown-folders">
              {!this.props.isLoading && this.displayFolders()}
            </div>
          </div>
        </article> 
    </section>
  )
}

}

export default PaletteForm;
