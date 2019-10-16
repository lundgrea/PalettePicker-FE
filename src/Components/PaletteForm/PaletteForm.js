import React, {Component} from 'react'
import './PaletteForm.css'

class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      localFolderID: '',
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

  clearInputs = () => {
    this.setState({name: "", error: "", localFolderID: ""})
  }

  displayFolders = () => {
     return this.props.folders.folders.map(folder => {
      return  (
      <p 
      onClick={e => this.getFolderName(e)}      
      id="folder-item-button">{folder.name}
      </p>
      )
    })
  }

  getFolderName = (e) => {
    e.preventDefault()
    let name = e.currentTarget.innerHTML
    console.log('that damn name', name)
    let foundFolderID = this.props.folders.folders.find(folder=> folder.name === name).id
    console.log('foundFolderid', foundFolderID)
    this.setState({localFolderID: foundFolderID})
      !this.state.name && !this.state.localFolderID ? this.setState([{error: 'Error adding palette'}]) : this.props.addNewPalette(this.state.name, this.props.currentPalette[0].color, this.props.currentPalette[1].color, this.props.currentPalette[2].color, this.props.currentPalette[3].color, this.props.currentPalette[4].color, foundFolderID)
    // this.clearInputs();
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
          placeholder="Palette Name..."
          name="name"
          value={this.state.name}
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
