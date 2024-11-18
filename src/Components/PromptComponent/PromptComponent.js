import React from "react";
import IndividualPrompt from "../IndividualPrompt/IndividualPrompt.js";
import "./PromptComponent.css";
import { useNavigate } from "react-router-dom";

function PromptComponent(props) {
  const navigate = useNavigate();
  const navigateToWheel = () => {
    navigate("/Wheel");
  };


  

  return (
    <div>
      <div className="QuestionsBlock">
          <IndividualPrompt
            prompts={props.prompts}
            selectScore={props.selectScore}
            add={0}
          />
          
       
        <div className="button-wrapper">
          <input
            onClick={navigateToWheel}
            className="button"
            type="submit"
            value="Next"
          />
        </div>
      </div>
    </div>
  );
}

export default PromptComponent;
