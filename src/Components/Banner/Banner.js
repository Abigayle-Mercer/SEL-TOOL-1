import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="outermost">
      <div
        style={{
          backgroundColor: "#7fb1cc",
          padding: "30px",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        <div className="textRow">
          <Link className="header" to="/Prompts ">
            {props.t1}
          </Link>

          <Link className="header2" to="/Wheel ">
            {props.t2}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
