import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
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
      isLoading: true
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

  componentDidMount = () => {
    this.generateRandomColors()
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
