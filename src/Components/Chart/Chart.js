import React from "react";
import Pie from "../Pie/Pie";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="Wrapper">
      <div className="container1">
        <div className="leftlabels">
          <p className="l1">Responsible Decision Making</p>
          <p className="l2">Relationship Skills</p>
        </div>

        <div className="column">
          <p className="t1">{props.title}</p>

          <Pie id="pie" slices={props.slices} />
          <div className="bottomlabels">
            <div className="l5">Social Awareness</div>
          </div>
        </div>

        <div className="leftlabels">
          <p className="l3">Self Awareness</p>
          <p className="l4">Self Managment</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;
