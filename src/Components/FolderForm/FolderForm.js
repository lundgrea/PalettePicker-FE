import React, { Component } from 'react'
import './FolderForm.css'

class FolderForm extends Component {
  constructor() {
    super();
    this.state = {
      folderName: "",
      error: ""
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newFolder = {
      id: Date.now(),
      name: this.state.name,
      palettes: []
    }
    this.addFolder(newFolder);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({folderName: ""})
  }

  render() {
    return (
      <form className="FolderForm">
        <h2 id="addFolder-text">Create a New Folder</h2>
        <input
        id="addFolder-input"
        type="text"
        placeholder="Folder Name"
        name="folderName"
        value={this.state.folderName}
        onChange={this.handleChange}
        required/>
        <button 
        id="addFolder-button"
        >Add Folder</button>
      </form>
    )
  }
}

export default FolderForm;