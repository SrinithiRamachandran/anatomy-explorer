import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Appendix() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const info = {
    name: "Appendix",
    description:
      "The appendix is a small tube attached to the large intestine, with unclear function but believed to have immune roles."
  };

  const fillColor = hover ? "#FFD93D" : "#808080"; // Hover color

  return (
    <g
      id="appendix"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    >
      <Tooltip title="Appendix" placement="right">
        <path
          fill={fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          d="M192,316.834
             c-1.225,2.578-1.231,5.131-1.173,7.948c0.027,1.613,0.457,6.923,3.499,6.124c2.337-0.614,1.322-6.91,1.382-8.72
             c0.038-1.293-0.101-7.262-3.208-5.686"
        />
      </Tooltip>

      {/* Info box on click */}
      {clicked && (
        <foreignObject x="300" y="320" width="250" height="100">
          <div className="bg-white text-black p-2 rounded shadow-lg">
            <h3 className="font-bold">{info.name}</h3>
            <p className="text-sm">{info.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
