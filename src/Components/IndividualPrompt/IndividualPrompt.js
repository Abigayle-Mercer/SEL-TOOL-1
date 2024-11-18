import React from "react";
import "./IndividualPrompt.css";

const IndividualPrompt = (props) => {
  let questions = Object.keys(props.prompts).map((questionKey, i) => (
    <div key={i}>
      <li>
        <div className="title">{props.prompts[questionKey].title}</div>

        <div className="question">{props.prompts[questionKey].text}</div>
        <div className="Answer">
          <input
            onChange={props.selectScore(i + props.add)} // Invoke the selectScore function
            type="range"
            min="1"
            max="100"
            value={
              props.prompts[questionKey].transform === "1.00"
                ? "100"
                : Math.round(
                    parseFloat(props.prompts[questionKey].transform) * 100
                  ).toString()
            }
            className="rangeInput"
            style={{ background: props.prompts[questionKey].fill }}
          />
          <span
            className="Score"
            style={{ backgroundColor: props.prompts[questionKey].fill }}
          >
            <div
              className="leftArrow"
              style={{
                borderRight: "5px solid " + props.prompts[questionKey].fill,
              }}
            ></div>
            {props.prompts[questionKey].transform === "1.00"
              ? "100"
              : Math.round(
                  parseFloat(props.prompts[questionKey].transform) * 100
                ).toString()}
          </span>
        </div>
        <div className="SliderLabels">
          <div className="never">Strongly Disagree</div>
          <div className="seldom">Disagree</div>
          <div className="often">Agree</div>
          <div className="always">Strongly Agree</div>
        </div>
      </li>
    </div>
  ));
  return <>{questions}</>;
};

export default IndividualPrompt;
