import React from "react";
import FolderForm from "../../Components/FolderForm/FolderForm";
import FoldersContainer from "../../Components/FoldersContainer/FoldersContainer";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <aside className="Sidebar">
      <FolderForm 
      folders={props.folders} 
      addNewFolder={props.addNewFolder} 
      getAllFolders={props.getAllFolders}/>
      <FoldersContainer 
      folders={props.folders} 
      getAFoldersPalettes={props.getAFoldersPalettes}/>
    </aside>
  );
};

export default Sidebar;
