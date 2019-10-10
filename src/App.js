import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      folders: []
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
   
   <div className="App">
     <h1>Palette Picker</h1>
     <p>{this.state.folders[1]}</p>
    </div>
    );
  }
}

export default App;
