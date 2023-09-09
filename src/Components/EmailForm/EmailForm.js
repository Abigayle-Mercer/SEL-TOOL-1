import React from "react";
import "./EmailForm.css";

function EmailForm(props) {
  return (
    <form onSubmit={props.sendEmail}>
      <div className="modal">
        <div onClick={props.toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Save PDF</h2>

          <div className="name">
            <label className="lab">Please enter a name for this file: </label>
            <input classname="in" type="text" id="name" name="name" />
          </div>

          <input className="send" type="submit" value="send"></input>
        </div>
      </div>
    </form>
  );
}
export default EmailForm;
