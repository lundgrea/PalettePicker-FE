import React from 'react'
import './Folder.css'

const Folder = ({folders}) => {
  return (
    <article className="Folder">
      <h3 id="folder_name">{folders.id}</h3>
    </article>
  )
}

export default Folder
