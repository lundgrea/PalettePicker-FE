import React, {Component} from 'react'
import './PaletteForm.css'

class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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


  render() {
  return (
    <section className="PaletteForm">
      <article id="generatePalette-container">
      <img id="palette-img"
      src={require('../../assets/paint-palette.svg')} 
      onClick={this.generateNewColors}
      alt=""/>
      <button id="generatePalette-button"
      onClick={this.generateNewColors}>
        Generate Palette
      </button>
      </article>
      <form id="addPaletteName-form">
        <label>Add Palette Name</label>
        <input
        id="addFolder-input"
        type="text"
        placeholder="Palette Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        required/>
        <button>Enter Name</button>
      </form>
      <button>SAVE PALETTE</button>
    </section>
  )
}

}

export default PaletteForm;
