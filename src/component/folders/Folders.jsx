import "./Folders.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import folderImg from "../../icons/folderImg.png"
import { useContext } from "react";
import { FoldersContext } from "../../context/FoldersContext";
import { ApiContext } from "../../context/ApiContext";

export default function Folders(props) {
  const folder = props.folder;
  const { foldersList, setFoldersList } = useContext(FoldersContext);
  const [onRenameFolder, setOnRenameFolder] = useState("close");
  const [changeFolderame, setChangeFoldername] = useState();
  const navigate = useNavigate();
  const serverURL = useContext(ApiContext);

  //================================================================== קריאת קבצים שבתוך תקייה

  const handelOpenFolder = (folder) => {
    navigate(`/${folder}`);
  };

  // ---------------------------------------------------------rename folder
  const renameFolder = async (folder) => {
    console.log("rename folder from here:");
    const res = await axios.put(`${serverURL}/api/files/rename`, {
      pastPath: `uploads/${folder}`,
      newPath: `uploads/${changeFolderame}`,
    });
  };
  // ---------------------------------------------------------
  const openRenameFolder = (e) => {
    e.stopPropagation();
    console.log("open rename");
    setOnRenameFolder("open");
  };

  const goRename = (e) => {
    e.stopPropagation();
    console.log("go rename");
    setChangeFoldername(e.target.value);
  };

  const closeRenameFolder = (folder) => {
    renameFolder(folder);
    setFoldersList(changeFolderame);
    setOnRenameFolder("close");
  };
  // ---------------------------------------------------------

  return (
    <div className="folders" onClick={(e) => handelOpenFolder(folder)}>
      {onRenameFolder === "close" ? (
        <div onClick={openRenameFolder}>{folder}</div>
      ) : (
        <input
          type="text"
          placeholder={folder}
          onChange={goRename}
          onClick={goRename}
          onBlur={(e) => closeRenameFolder(folder)}
        ></input>
      )}
      <img className="folderImg" src={folderImg}></img>
    </div>
  );
}
