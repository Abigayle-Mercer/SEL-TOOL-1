import React from "react";
import Pie from "../Pie/Pie";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="Wrapper">
      <div className="container1">

        <div className="column">
          <p className="t1">{props.title}</p>
          <div className="piechart">
          <Pie id="pie" prompts={props.prompts} categories={props.categories}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
