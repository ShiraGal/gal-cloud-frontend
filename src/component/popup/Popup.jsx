import "./Popup.css";

export default function Popup(props){

    const popupMsg = props.state[0];
    const setPopup = props.state[1];


    return(
        <div>
      {popupMsg  ? (
        <div className={`overlay ${popupMsg ? "" : "close"}`}>
          <div className="lookPopup ">
            <div className="txtPopup">{popupMsg}</div>
            <div className="btn.Popup">
              <button className="btn_yes" onClick={() => setPopup(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
   </div>
    )
}