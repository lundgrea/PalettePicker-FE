import React from 'react'
import './Folder.css'

const Folder = (props) => {
  console.log(props)
  return (
    <article className="Folder">
      <h3 id="folder_name">{props.name}</h3>
    </article>
  )
}

export default Folder
