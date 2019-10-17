import React from "react";
import FolderForm from "../../Components/FolderForm/FolderForm";
import FoldersContainer from "../../Components/FoldersContainer/FoldersContainer";
import PropTypes from 'prop-types';
import "./Sidebar.css";

export const Sidebar = props => {
  return (
    <aside className="Sidebar">
      <FolderForm 
      folders={props.folders} 
      addNewFolder={props.addNewFolder} 
      getAllFolders={props.getAllFolders}/>
      <FoldersContainer 
      folders={props.folders} 
      deleteAFolder={props.deleteAFolder}
      getAFoldersPalettes={props.getAFoldersPalettes}/>
    </aside>
  );
};

export default Sidebar;


Sidebar.propTypes = {
  addNewFolder:PropTypes.func,
  deleteAFolder: PropTypes.func,
  folder: PropTypes.array,
  getAFoldersPalette: PropTypes.func,
  getAllFolders: PropTypes.func
};