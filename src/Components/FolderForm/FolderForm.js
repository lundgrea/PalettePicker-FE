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

  handleSubmit = (e, folderName) => {
    e.preventDefault();
    !folderName ? console.log("error") : this.checkForDuplicates(folderName);
    this.clearInputs();
  }

  checkForDuplicates = (folderName) => {
    let checkNames = this.props.folders.folders.find(folder => folder.name === folderName)
    checkNames === undefined ? this.props.addNewFolder(folderName) : this.setState({error: "Happy Little Accident: This Folder Name Already Exists. Please Use a Different Name!"});
  }

  clearInputs = () => {
    this.setState({folderName: "", error: ""})
  }

  render() {
    return (
      <form className="FolderForm">
        <h2 id="addFolder-text">Create a New Folder</h2>
        <input
        id="addFolder-input"
        type="text"
        placeholder="Enter New Folder Name"
        name="folderName"
        value={this.state.folderName}
        onChange={this.handleChange}
        required/>
        <button 
        id="addFolder-button"
        onClick={(e) => this.handleSubmit(e, this.state.folderName)}
        >Add Folder</button>
      </form>
    )
  }
}

export default FolderForm;