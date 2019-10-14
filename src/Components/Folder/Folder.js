import React from 'react'
import './Folder.css'

const Folder = (props) => {
  return (
    <article className="Folder">
      <h3 id="folder_name">{props.name}</h3>
      <button>X</button>
    </article>
  )
}

export default Folder
