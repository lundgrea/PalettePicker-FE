import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { fetchAllFolders, fetchAllPalettes, fetchAPalette, fetchAFolder, fetchAFoldersPalettes } from '../../apiCalls/apiCalls'
import "./App.css";

let array = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      folders: [],
      folderID: "",
      palettes: [],
      paletteID: "",
      currentPalette: [],
      isLoading: true
    };
  }

  generateRandomColors = condition => {
    this.colorSwap();
    if (!condition) {
      if (array.length === 5) {
        this.setState({ currentPalette: array });
        return;
      } else {
        let number = "#" + Math.floor(Math.random() * 16777215).toString(16);
        array.push({ color: number, isLocked: false });
        this.generateRandomColors();
      }
    } else {
      array = [];
      let number = "#" + Math.floor(Math.random() * 16777215).toString(16);
      array.push({ color: number, isLocked: false });
      this.generateRandomColors();
    }
  };

  colorSwap = () => {
    return this.state.currentPalette.map(palette => {
      ("oh no..");
      if (palette.isLocked === true) {
        return palette;
      } else {
        let number = "#" + Math.floor(Math.random() * 16777215).toString(16);
        palette.color = number;
        return palette;
      }
    });
  };

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

  getAllFolders = () => {
    fetchAllFolders()
    .then(folders => this.setState({ folders }))
    .then(isLoading => this.setState({ isLoading: false }))
    .catch(error => error);
  }

  componentDidMount = () => {
    this.generateRandomColors();
    this.getAllFolders();
    // this.getAllPalettes();
    this.getAFolder(11);
    this.getAFoldersPalettes(11);
    // this.grabAPalette(16)
  };

  // getAPalette = paletteId => {
  //   fetchAPalette(paletteId)
  //   .then(currentPalette => this.setState({ currentPalette }))
  //   .catch(error => error);
  // }

  // getAllPalettes = () => {
  //   fetchAllPalettes()
  //   .then(palettes => this.setState({ palettes }))
  //   .catch(error => error);
  // }

  getAFolder = folderId => {
    fetchAFolder(folderId)
    .then(folder => this.setState({ folderID: folder[0].id }))
    .catch(error => error);
  }

  getAFoldersPalettes = folderId => {
    fetchAFoldersPalettes(folderId)
    .then(palettes => this.setState({ palettes }))
    .catch(error => error);
  }

  render() {
    return (
      <main className="App">
        {!this.state.isLoading && <Sidebar folders={this.state.folders} />}
        <Main
          currentPalette={this.state.currentPalette}
          generateRandomColors={this.generateRandomColors}
          toggleLock={this.toggleLock}
        />
      </main>
    );
  }
}

export default App;
