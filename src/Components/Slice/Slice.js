import React, { useState } from "react";

import "rsuite/dist/rsuite.min.css";
import { Button, Popover, Whisper } from "rsuite";

const Slice = (props) => {
  let slices = Object.keys(props.slices).map((sliceKey, i) => {
    const slice = props.slices[sliceKey];

    const gradientId = `gradient-${sliceKey}`;
    const lighterColor = getLighterColor(slice.fill, 100, slice.transform); // Adjust the percentage as needed

    return (
      <g key={sliceKey} transform={slice.rotate}>
        <defs>
          <radialGradient id={gradientId}>
            <stop offset="0%" stopColor={lighterColor} />
            <stop offset="100%" stopColor={slice.fill} />
          </radialGradient>
        </defs>

        <g mask="url(#wedge-mask)">
          <circle
            className="Slice"
            cx="220"
            cy="220"
            r="200"
            fill={`url(#${gradientId})`}
            style={{ transform: `scale(${slice.transform})` }}
          ></circle>
        </g>
      </g>
    );
  });

  return <>{slices}</>;
};

// Helper function to calculate gradient colors based on the slice's fill color and length
// Helper function to calculate gradient colors based on the slice's fill color and length

// Helper function to get a lighter shade of a given color
// Helper function to get a lighter shade of a given color
// Helper function to get a lighter shade of a given color
const getLighterColor = (color, percentage, transform) => {
  const decColor = parseInt(color.substr(1), 16);
  const r = (decColor >> 16) & 255;
  const g = (decColor >> 8) & 255;
  const b = decColor & 255;

  const lighterR = Math.round(r + (255 - r) * (percentage / 100));
  const lighterG = Math.round(g + (255 - g) * (percentage / 100));
  const lighterB = Math.round(b + (255 - b) * (percentage / 100));

  return `rgb(${lighterR}, ${lighterG}, ${lighterB})`;
};

export default Slice;
