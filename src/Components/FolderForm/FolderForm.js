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
        <label id="addFolder-text">Create a New Folder</label>
        <div id="input-button-container">
        <input
        id="addFolder-input"
        type="text"
        placeholder="Enter New Folder Name"
        name="folderName"
        value={this.state.folderName}
        onChange={this.handleChange}
        required/>
        <img 
        id="addFolder-button"
        src={require('../../assets/add.svg')}
        onClick={(e) => this.handleSubmit(e, this.state.folderName)}
        />
        </div>
      </form>
    )
  }
}

export default FolderForm;