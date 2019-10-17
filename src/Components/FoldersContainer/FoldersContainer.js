import React from "react";
import Folder from "../Folder/Folder";
import "./FoldersContainer.css";

export const FoldersContainer = props => {
  const allFolders = props.folders.folders.map((folder, index) => {
    return (
      <Folder 
      key={index}
      id={folder.id} 
      name={folder.name} 
      palettes={folder.palettes} 
      getAFoldersPalettes={props.getAFoldersPalettes}
      deleteAFolder={props.deleteAFolder}/>
    );
  });
  return (
    <article className="FoldersContainer">
      <h2 id="foldersContainer-header-text">Saved Folders</h2>
        <div id="folders-scroll-section">
        {allFolders}
        </div>
    </article>
  );
};

export default FoldersContainer;
