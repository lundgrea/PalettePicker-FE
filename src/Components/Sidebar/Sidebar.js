import React from 'react'
import FolderForm from '../../Components/FolderForm/FolderForm'
import FoldersContainer from '../../Components/FoldersContainer/FoldersContainer'
import './Sidebar.css'

const Sidebar = (props) => {
  console.log('sidebar folder', props)
  return (
    <aside className="Sidebar">
      <FolderForm />
      <FoldersContainer folders={props.folders}/>
    </aside>
  )
}

export default Sidebar;
