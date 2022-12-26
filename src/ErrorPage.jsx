import "./component/popup/Popup";
import { useNavigate } from "react-router-dom";

export default function Popup(props){

    const navigate = useNavigate();


    return(
        <div>
   <div className="overlay">
          <div className="lookPopup ">
            <div className="txtPopup">The page does not exist</div>
            <div className="btn.Popup">
              <button className="btn_yes" onClick={() => navigate("/") }>
                Back to the app
              </button>
            </div>
          </div>
       </div>
   </div>
    )
}