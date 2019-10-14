import React from "react";
import Folder from "../Folder/Folder";
import "./FoldersContainer.css";

const FoldersContainer = props => {
  const allFolders = props.folders.folders.map((folder, index) => {
    return (
      <Folder 
      key={index}
      id={folder.id} 
      name={folder.name} 
      palettes={folder.palettes} 
      getAFoldersPalettes={props.getAFoldersPalettes}/>
    );
  });
  return (
    <article className="FoldersContainer">
      <h2 id="foldersContainer-header-text">Folders Container</h2>
      {allFolders}
    </article>
  );
};

export default FoldersContainer;
