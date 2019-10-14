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


  render() {
  return (
    <section className="PaletteForm">
     <form>
      <button 
      onClick={this.generateNewColors}>
        Generate Palette
      </button>
       <label>Add Palette Name</label>
       <input></input>
       <button>Enter Name</button>
       <button>SAVE PALETTE</button>
     </form>
    </section>
  )
}

}

export default PaletteForm;
