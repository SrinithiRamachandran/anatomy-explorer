import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Breast() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const info = {
    name: "Breast",
    description:
      "The breast is a mammary gland in humans that produces milk and plays a role in sexual characteristics and body image."
  };

  const fillColor = hover ? "#FF6B6B" : "#808080"; // Change color on hover

  return (
    <g
      id="breast"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
      transform="translate(10.5,22)"
    >
      <Tooltip title="Breast" placement="right">
        <g fill={fillColor} fillOpacity="0.7" stroke="#787878" strokeWidth="0.5">
          <path
            id="breast1"
            d="M210.508,159.558c0,5.094-9.027,9.223-20.161,9.223
              s-20.161-4.129-20.161-9.223c0-5.094,9.027-9.223,20.161-9.223S210.508,154.465,210.508,159.558z"
          />
          <path
            id="breast2"
            d="M274.354,159.558c0,5.094-9.021,9.223-20.162,9.223
              c-11.133,0-20.151-4.129-20.151-9.223c0-5.094,9.021-9.223,20.151-9.223C265.326,150.335,274.354,154.465,274.354,159.558z"
          />
        </g>
      </Tooltip>

      {clicked && (
        <foreignObject x="300" y="50" width="250" height="120">
          <div className="bg-white text-black p-2 rounded shadow-lg">
            <h3 className="font-bold">{info.name}</h3>
            <p className="text-sm">{info.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
