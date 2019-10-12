import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main'
import './App.css';

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

  generateRandomColor = ()  => {
    
  }

  componentDidMount = () => {
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
    <Main/>
    </main>
    );
  }
}

export default App;
