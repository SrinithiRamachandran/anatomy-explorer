import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Anus() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const info = {
    name: "Anus",
    description:
      "The anus is the opening at the end of the digestive tract where solid waste leaves the body."
  };

  const fillColor = hover ? "#FFD93D" : "#808080"; // hover color

  return (
    <g
      id="anus"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    >
      <Tooltip title="Anus" placement="right">
        <path
          fill={fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          d="M226.089,351.474
             c3.767,0,7.724-0.315,11.457-0.147c1.521,3.824-6.23,6.624-6.373,10.188c-1.286,0.313-0.072,0.188-1.5,0.123
             c-0.14-1.313-0.097-2.454-1.211-3.6c-0.896-0.92-2.738-1.474-3.459-2.458c-0.675-0.923-0.3-2.601,0.086-3.504"
        />
      </Tooltip>

      {/* Info box on click */}
      {clicked && (
        <foreignObject x="300" y="300" width="250" height="100">
          <div className="bg-white text-black p-2 rounded shadow-lg">
            <h3 className="font-bold">{info.name}</h3>
            <p className="text-sm">{info.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
