import React from 'react'
import './Folder.css'

const Folder = (props) => {
  return (
    <article className="Folder">
      <button 
      onClick={(e) => props.getAFoldersPalettes(e, props.id)}
      id="folder_name">{props.name}
      </button>
      <img 
      id="delete-img" 
      src={require('../../assets/delete.svg')}
      onClick={(e) => props.deleteAFolder(e, props.id)}
      />
    </article>
  )
}

export default Folder
