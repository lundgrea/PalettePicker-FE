import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
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

  componentDidMount = () => {
    this.generateRandomColors();
    return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/folders")
      .then(res => res.json())
      .then(folders => this.setState({ folders }))
      .then(isLoading => this.setState({ isLoading: false }))
      .catch(error => error);
  };

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
