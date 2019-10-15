// import React, { Component } from 'react'
// import './SavePaletteForm.css'

// class SavePaletteForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       paletteName: "",
//       folderID: "",
//       error: ""
//     }
//   }

//   displayFolders = () => {
//     let foldersDropdown = this.props.folders.folders.map(folder => {
//       return <a>{folder.name}</a>
//     })
//     return foldersDropdown
//   }


//   render() {
//     //input, dropdown, button
//     return (
//       <article className="SavePaletteForm">
//         <form id="namePalette-form">
//           <label>Give New Palette a Name</label>
//           <input
//           id="paletteName-input"
//           type="text"
//           placeholder="Palette Name..."
//           name="paletteName"
//           value={this.state.paletteName}
//           onChange={this.handleChange}
//           required/>
//           <button id="dropdown-button"></button>
//           <div id="dropdown-folder">
//             {console.log("hey")}
//             {this.displayFolders}
//           </div>
//         </form>
//       </article>
//     )
//   }
// }

// export default SavePaletteForm; 