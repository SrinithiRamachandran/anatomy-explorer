import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Adipose() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const info = {
    name: "Adipose Tissue",
    description: "Adipose tissue stores fat, cushions organs, and provides insulation for the body."
  };

  const fillColor = hover ? "#FF6B6B" : "#808080"; // change color on hover

  return (
    <g
      id="adipose"
      className="adipose"
      fill={fillColor}
      fillOpacity="0.7"
      transform="translate(10.5,20)"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    >
      <Tooltip title="Adipose" placement="right">
        <g>
          <path
            id="path4314"
            d="M217.595,299.357c-10.021-1.201-20.553-6.685-29.754-15.487
                c-3.354-3.208-5.486-5.575-6.782-7.525c-3.243-4.88-7.801-9.031-12.312-11.213l-1.313-0.632l0.104-0.953
                c0.455-4.237,0.604-7.421,0.623-12.939c0.014-5.281,0.045-6.001,0.25-5.913c4.139,1.771,9.17,1.703,13.732-0.183
                c1.735-0.716,2.063-0.935,3.825-2.586c8.925-8.339,18.208-13.396,27.695-15.086c3.991-0.711,9.129-0.808,12.943-0.245
                c10.34,1.527,20.821,6.955,29.237,15.132c1.674,1.625,2.061,1.815,4.902,2.433c1.898,0.413,6.008,0.486,7.885,0.141
                c1.398-0.258,3.666-0.931,4.813-1.429c0.449-0.198,0.875-0.31,0.937-0.248c0.166,0.166,0.318,6.242,0.334,13.238l0.021,6.157
                l-0.854,0.39c-3.326,1.533-7.604,6.287-10.479,11.656c-1.203,2.242-6.396,8.141-10.313,11.728
                c-8.832,8.083-17.146,12.345-26.496,13.57C224.354,299.659,220.088,299.656,217.595,299.357z"
          />
        </g>
      </Tooltip>

      {/* Info box on click */}
      {clicked && (
        <foreignObject x="300" y="100" width="250" height="100">
          <div className="bg-white text-black p-2 rounded shadow-lg">
            <h3 className="font-bold">{info.name}</h3>
            <p className="text-sm">{info.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
