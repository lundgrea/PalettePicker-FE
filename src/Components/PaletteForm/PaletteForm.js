import React, {Component} from 'react'
import './PaletteForm.css'
import PropTypes from 'prop-types'

class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      localFolderID: '',
      isSaved: false,
      viewForms: false,
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

  toggleViewForms = () => {
    this.setState({viewForms: !this.state.viewForms})
  }

  getFolderName = (e) => {
    e.preventDefault()
    let name = e.currentTarget.innerHTML
    let foundFolderID = this.props.folders.folders.find(folder=> folder.name === name).id
    this.setState({localFolderID: foundFolderID})
    !this.state.name && !this.state.localFolderID ? this.setState([{error: 'Error adding palette'}]) : this.props.addNewPalette(this.state.name, this.props.currentPalette[0].color, this.props.currentPalette[1].color, this.props.currentPalette[2].color, this.props.currentPalette[3].color, this.props.currentPalette[4].color, foundFolderID)
    // this.generateNewColors(e)
    // this.clearInputs();
  }



  render() {
  return (
    <section className="PaletteForm">
      {!this.state.viewForms ?
      <div id="initial-palette-container">
      <article id="generatePalette-container">
        <img id="palette-img"
        src={require('../../assets/paint-palette-white.svg')} 
        onClick={this.generateNewColors}
        alt=""/>
        <button id="generatePalette-button" onClick={this.generateNewColors}>Generate New Palette</button>
      </article>
      <article id="savePalette-container">
        <div id="save-palette-buttons-container">
          <img id="download-img" src={require('../../assets/download.svg')} alt="" onClick={this.toggleViewForms}/>
          <button id="savePalette-button" onClick={this.toggleViewForms}>Save Current Palette</button> 
        </div>
      </article>
      </div>
      :
        <form id="save-palette-forms-container">
          <div id="add-name-label-and-input">
            <label>Add Palette Name</label>
            <input
            id="paletteName-input"
            placeholder="Palette Name..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required/>
          </div>
          <div id="dropdown-container">
            <button id="dropdown-button">Pick Folder</button>
            <div id="dropdown-folders">
              {!this.props.isLoading && this.displayFolders()}
            </div>
          </div>
          <div id="submit-button-container">
            <button id="submit-button"
            onClick={this.toggleViewForms}>Submit</button>
          </div>
        </form>
      }
      </section>
  )
}

}

export default PaletteForm;

PaletteForm.propTypes = {
  currentPalette: PropTypes.array,
  generateRandomColors: PropTypes.func,
  folders: PropTypes.object,
  isLoading: PropTypes.bool,
  addNewPalette: PropTypes.func
} 

