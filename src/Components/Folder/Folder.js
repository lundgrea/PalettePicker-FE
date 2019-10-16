import React from 'react'
import './Folder.css'

const Folder = (props) => {
  return (
    <article className="Folder">
      <button id="folder_name"
      onClick={(e) => props.getAFoldersPalettes(e, props.id)}>{props.name}</button>
      <img id="delete-img" src={require('../../assets/delete.svg')} 
      />
    </article>
  )
}

export default Folder
