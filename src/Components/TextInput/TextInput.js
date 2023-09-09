import React from "react";
import "./TextInput.css";

function TextInput(props) {
  return (
    <div>
      <p className="title2">{props.title}</p>
      <div className="question">{props.q1}</div>
      <div>
        <form>
          <textarea
            name={props.name1}
            className="input"
            onChange={props.set1}
            value={props.question1}
          />
        </form>
      </div>
      <div className="question">{props.q2}</div>
      <div>
        <form>
          <textarea
            name={props.name2}
            className="input"
            onChange={props.set2}
            value={props.question2}
          />
        </form>
      </div>
    </div>
  );
}

export default TextInput;
