import React from "react";
import "./Pie.css";
import Slice from "../Slice/Slice.js";

function Pie(props) {
  const labelRadius = 300;
  return (
    <div>
      <div className="ChartBlock">
        <div className="ChartPie" style={{ width: "450px" }}>
          <svg
            className="ChartPieChunk"
            width="100%" // Adjust the width to accommodate the labels
            height="100%" // Adjust the height to accommodate the labels
            viewBox="0 0 440 440" // Adjust the viewBox for a larger area
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <g id="overlay">
                <rect x="219" y="20" height="200" width="2" fill="#FFF"></rect>
                <g transform="translate(210, 30)">
                  <path fill="#000"></path>
                </g>
              </g>
            </defs>
            <mask id="wedge-mask" fill="white">
              <path
                transform="translate(20, 20)"
                d="M93 7.241a200.006 200.006 0 0107.551-.865L200.004 200 19.33 20.241z"
                fillRule="nonzero"
              ></path>
            </mask>
            <circle
              cx="220"
              cy="220"
              r="200"
              fill="#EFEFEF"
              stroke="#E3E3E3"
              strokeWidth="1"
            ></circle>
            <Slice slices={props.slices} />

            <use xlinkHref="#overlay" transform="rotate(72.5, 220, 220)"></use>
            <use xlinkHref="#overlay" transform="rotate(144.5, 220, 220)"></use>
            <use xlinkHref="#overlay" transform="rotate(216.5, 220, 220)"></use>
            <use xlinkHref="#overlay" transform="rotate(288.5, 220, 220)"></use>
            <use xlinkHref="#overlay" transform="rotate(360.5, 220, 220)"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Pie;
