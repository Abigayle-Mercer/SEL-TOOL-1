import React from "react";
import "./Prompts.css";
import Banner from "../Components/Banner/Banner";
import PromptComponent from "../Components/PromptComponent/PromptComponent.js";
function Prompts(props) {
  return (
    <div>
      <div className="TextBox">
        <p className="Text">
          The Collaborative for Academic, Social, and Emotional Learning has
          established a set of competencies that help to structure our
          understanding of the knowledge, awareness, and skills that are part of
          social and emotional learning.
          <br />
          <br />
          This SEL Self-Assessment tool offers you the opportunity to explore
          your own perceptions of your SEL knowledge, awareness, and skills.{" "}
          <br />
          <br />
          When you see a prompt, please consider how often you employ the skill
          referenced and use the slider to respond. After you have completed the
          prompts, your answers will generate an SEL wheel that will allow you
          to visualize the data and see areas of strength and areas for growth
          in the evolution of your knowledge, awareness, and skills.
          <br />
          <br />
          We hope the experience is meaningful and helpful for you and your
          community,
          <br />
          The Lane ESD SEL Team
        </p>
      </div>

      <PromptComponent
        slices={props.slices}
        selectScore={props.selectScore}
      ></PromptComponent>
    </div>
  );
}

export default Prompts;
