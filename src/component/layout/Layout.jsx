import "./Layout.css";
import axios from "axios";
import Folders from "../folders/Folders";
import Header from "../header/Header";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { FoldersContext } from "../../context/FoldersContext";
import { FilesContext } from "../../context/FilesContext";
import File from "../file/File";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";


export default function Layout() {
  const { foldersList, setFoldersList } = useContext(FoldersContext);
  const { filesList, setFilesList } = useContext(FilesContext);
  const [showFoldersList, setShowFoldersList] = useState([]);
  const [showFilesList, setShowFilesList] = useState([]);
  const navigate = useNavigate();
  const serverURL = useContext(ApiContext);

  //================================================================== read main folder- "uploads"

  useEffect(() => {
    const result = axios
      .get(`${serverURL}/api/folders/uploads`)
      .then((result) => {
        setShowFoldersList(result.data.myfolders);
        setShowFilesList(result.data.myOutFils);
        console.log("end showOut");
      });
  }, [foldersList, filesList]);

  //==================================================================
  return (
    <>
      <Header pathHere="./uploads" />
      <br></br>

      <div className="folders-area">
        {showFoldersList.map((folder, i) => (
          <Folders folder={folder} key={i}/>
        ))}
      </div>

      <hr />
      <div className="filelist-files">
        {showFilesList.map((file, i) => (
          <File filename={file} foldername={"uploads"} key={i}></File>
        ))}
      </div>
    </>
  );
}

