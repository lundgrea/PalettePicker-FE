import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main'
import './App.css';

let array = []

class App extends Component {
  constructor() {
    super()
    this.state = {
      folders: [],
      folderID: "",
      palettes: [],
      paletteID: "",
      currentPalette: [],
      isLoading: true
    }
  }


  generateRandomColors = (condition)  => {
    if (!condition) {
      if (array.length === 5) {
        this.setState({currentPalette: array})
        return 
      } else {
        let number = '#'+Math.floor(Math.random()*16777215).toString(16);
        array.push({color: number, isLocked: false})
        this.generateRandomColors()
      }
    } else {
      array = [];
        let number = '#'+Math.floor(Math.random()*16777215).toString(16);
        array.push({color: number, isLocked: false})
        this.generateRandomColors()
      }
    }

  componentDidMount = () => {
    this.generateRandomColors()
    return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/folders')
      .then(res => res.json())
      .then(folders => this.setState({folders}))
      .then(isLoading => this.setState({isLoading: false}))
      .catch(error => console.log(error))
  }

  render()  {
   return (
   <main className="App">
     {!this.state.isLoading && <Sidebar folders={this.state.folders}/>}
    <Main currentPalette={this.state.currentPalette} generateRandomColors={this.generateRandomColors}/>
    </main>
    );
  }
}

export default App;
