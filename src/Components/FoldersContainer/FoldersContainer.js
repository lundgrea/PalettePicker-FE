import React from 'react'
import Folder from '../Folder/Folder'
import './FoldersContainer.css'

const FoldersContainer = (props) => {
  // console.log("FoldersContainer---> ", props)
  // const allFolders = props.folders.folders.map(folder => {
  //   return (
  //     <Folder 
  //     id={folder.id}
  //     name={folder.name}
  //     palettes={folder.palettes}
  //     />
  //   )
  // })
  return (
    <article className="FoldersContainer">
      <h2 id='foldersContainer-header-text'>Folders Container</h2>
      {/* {allFolders} */}
    </article>
  )
}

export default FoldersContainer;
