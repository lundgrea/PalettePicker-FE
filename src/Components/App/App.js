import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header'
import PaletteContainer from '../PaletteContainer/PaletteContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      folders: [],
      folderID: "",
      palettes: [],
      paletteID: "",
      currentPalette: []
    }
  }
  componentDidMount = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/folders')
      .then(res => res.json())
      .then(folders => this.setState({folders}))
      .catch(error => console.log(error))
  }

  render()  {
   return (
   <main className="App">
     <Sidebar folders={this.state.folders}/>
     <Header />
     <PaletteContainer />
    </main>
    );
  }
}

export default App;
