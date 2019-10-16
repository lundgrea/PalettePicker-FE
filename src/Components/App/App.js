import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { 
  fetchAllFolders, 
  fetchAllPalettes, 
  fetchAPalette, 
  fetchAFolder, 
  fetchAFoldersPalettes, 
  deleteFolder, 
  deletePalette, 
  postNewPalette, 
  postNewFolder, 
  patchAPalette, 
  patchAFolder 
} from '../../apiCalls/apiCalls'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      folders: [],
      folderID: "",
      palettes: [],
      paletteID: "",
      currentPalette: [],
      isLoading: true,
      networkMessage: '',
      error: ''
    };
  }

  generateRandomColors = () => {
    let unlockedSwatches = this.state.currentPalette.map(swatch => {
      if (!swatch.isLocked) {
        return {color: hexCodeGen(), isLocked: false}
      }
      return swatch
    })

    let currentPalette = Array(5).fill({}).map(el => {
      return {color: hexCodeGen(), isLocked: false}
    })

    function hexCodeGen () {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    return this.state.currentPalette.length === 5 ? this.setState({currentPalette: unlockedSwatches}) : this.setState({currentPalette})

  }

  toggleLock = (e, color) => {
    e.preventDefault();
    const newArray = this.state.currentPalette.map(palette => {
      if (palette.color === color) {
        palette.isLocked = !palette.isLocked;
        return palette;
      } else {
        return palette;
      }
    });
    this.setState({ currentPalette: newArray });
  };

  clearFolderID = (e) => {
    e.preventDefault()
    this.setState({folderID: ""})
  }

  componentDidMount = () => {
    this.generateRandomColors();
    this.getAllFolders();
    // this.deleteAPalette(30)
    // this.deleteAFolder(9);
    // this.grabAPalette(16)
    // this.addNewPalette('Jolly', array[0], array[1], array[2], array[3], array[4], 11)
    // this.addNewFolder('Jambo Rambo')
    // this.updateAPalette(19, 'name', 'Bizarre Violet')
    // this.updateAFolder(11, 'Doozy Boozy')
  };

  getAFolder = folderId => {
    fetchAFolder(folderId)
    .then(folder => this.setState({ folderID: folder[0].id }))
    .catch(error => this.setState({error}))
  }

  getAllFolders = () => {
    fetchAllFolders()
    .then(folders => this.setState({ folders }))
    .then(isLoading => this.setState({ isLoading: false }))
    .catch(error => this.setState({error: "Happy Little Accident While Getting All Folders! Please Try Again."}))
  }

  getAPalette = paletteId => {
    fetchAPalette(paletteId)
    .then(currentPalette => this.setState({ currentPalette }))
    .catch(error => this.setState({error}))
  }

  getAFoldersPalettes = (e, folderID) => {
    e.preventDefault()
    fetchAFoldersPalettes(folderID)
    .then(palettes => this.setState({ folderID, palettes }))
    .catch(error => this.setState({error}))
  }

  getAllPalettes = () => {
    fetchAllPalettes()
    .then(palettes => this.setState({ palettes }))
    .catch(error => this.setState({error}))
  }

  addNewPalette = (name, c1, c2, c3, c4, c5, folderId) => {
    postNewPalette(name, c1, c2, c3, c4, c5, folderId)
    .then(networkMessage => this.setState({networkMessage}))
    .then(() => this.getAllFolders())
    .catch(error => this.setState({error: "Happy Little Accident Adding Your Palette!"}))
  }

  addNewFolder = folderName => {
    postNewFolder(folderName)
    .then(networkMessage => this.setState({networkMessage}))
    .then(() => this.getAllFolders())
    .catch(error => this.setState({error: "Happy Little Accident Adding Your Folder! "}))
  }

  updateAPalette = (paletteId, value) => {
    patchAPalette(paletteId, value)
   .then(networkMessage => this.setState({networkMessage}))
    .catch(error => this.setState({error}))  
  }

  updateAFolder = (folderId, newName) => {
    patchAFolder(folderId, newName)
    .then(networkMessage => this.setState({networkMessage}))
    .catch(error => this.setState({error}))
  }

  deleteAPalette = (e, paletteId, folderId) => {
    e.preventDefault()
    deletePalette(paletteId)
    .then(networkMessage => this.setState({networkMessage}))
    // .then(() => this.getAFoldersPalettes(folderId))
    .catch(error => this.setState({error}))
  }

  deleteAFolder = (e, folderId) => {
    e.preventDefault()
    deleteFolder(folderId)
    .then(networkMessage => this.setState({networkMessage}))
    .then(() => this.getAllFolders())
    .catch(error => this.setState({error}))
  }
 

  render() {
    return (
      <main className="App">
        {!this.state.isLoading 
        && 
        <Sidebar 
        folders={this.state.folders} 
        addNewFolder={this.addNewFolder}
        getAllFolders={this.getAllFolders}
        getAFoldersPalettes={this.getAFoldersPalettes}
        deleteAFolder={this.deleteAFolder}
        />}
        <Main
          currentPalette={this.state.currentPalette}
          generateRandomColors={this.generateRandomColors}
          toggleLock={this.toggleLock}
          palettes={this.state.palettes}
          folderID={this.state.folderID}
          clearFolderID={this.clearFolderID}
          folders={this.state.folders}
          isLoading={this.state.isLoading}
          addNewPalette={this.addNewPalette}
          deleteAPalette={this.deleteAPalette}
        />
      </main>
    );
  }
}

export default App;
