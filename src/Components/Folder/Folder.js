import React from 'react'
import './Folder.css'

const Folder = (props) => {
  return (
    <article className="Folder">
      <img 
      id="folder_delete"
      alt="folder_delete"
      className="folder_delete"
      src={require('../../assets/delete.svg')}
      onClick={(e) => props.deleteAFolder(e, props.id)}
      />
      <h3 id="folder_name">{props.name}</h3>
      <img
      id="folder_more"
      alt="folder_more"
      className="folder_more"
      src={require('../../assets/dots.png')}
      onClick={(e) => props.getAFoldersPalettes(e, props.id)}
      />
    </article>
  )
}

export default Folder
