import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function AdrenalGland() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const info = {
    name: "Adrenal Gland",
    description:
      "The adrenal glands produce hormones that help regulate metabolism, immune system, blood pressure, and stress response."
  };

  const fillColor = hover ? "#FFD93D" : "#808080"; // change color on hover

  return (
    <g
      id="adrenal"
      transform="translate(10.5,20)"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    >
      <Tooltip title="Adrenal Gland" placement="right">
        <g fill={fillColor} fillOpacity="0.7" stroke="#787878" strokeWidth="0.5">
          <path
            id="adrenal_gland1"
            d="M191.418,204.47l2.925-1.089
            l1.755-0.544h0.979l2.145,0.544l1.95,1.089l1.755,1.089l0.975,1.27l0.396,1.633l0.975,1.452l0.395,0.544l1.172,0.363l0.188,0.544
            l0.396-0.182l0.188-0.363l0.396-0.907l0.19-0.907l0.585-0.363l0,0l0.193-0.544l0.394-0.726l0.191-0.907v-0.726v-0.726v-0.907
            l0.195-0.544v-0.907v-0.544l-0.396-1.27v-1.089l-0.188-0.907l-0.396-1.089v-0.363l-0.39-0.363v-0.726l-0.585-0.726l-0.585-0.726
            l-0.585-0.363h-0.979h-1.56l-0.975,0.182l-0.979,0.363l-1.17,0.726l-1.365,0.363l-0.188,0.363l-0.78,0.363l-1.755,1.27
            l-1.365,0.544l-0.585,0.907l-0.39,0.182l-0.585,0.544l-1.762,0.907l-0.585,0.907l-0.773,0.544v0.726l-0.396,0.544l-0.39,1.089
            L191.418,204.47z"
          />
          <path
            id="adrenal_gland2"
            d="M257.169,195.467
            l-2.925-1.089l-1.763-0.544h-0.975l-2.146,0.544l-1.946,1.089l-1.755,1.089l-0.979,1.27l-0.391,1.633l-0.979,1.452l-0.391,0.544
            l-1.172,0.363l-0.193,0.544l-0.391-0.182l-0.193-0.363l-0.393-0.907l-0.193-0.907l-0.584-0.363l0,0l-0.195-0.544l-0.391-0.726
            l-0.195-0.907v-0.726v-0.726v-0.907l-0.188-0.544v-0.907v-0.544l0.39-1.27v-1.089l0.195-0.907l0.391-1.089v-0.363l0.396-0.363
            v-0.726l0.585-0.726l0.585-0.726l0.585-0.363h0.977h1.563l0.975,0.182l0.976,0.363l1.177,0.726l1.357,0.363l0.195,0.363l0.78,0.363
            l1.755,1.27l1.365,0.544l0.585,0.907l0.39,0.182l0.585,0.544l1.755,0.907l0.586,0.907l0.779,0.544v0.726l0.391,0.544l0.396,1.089
            L257.169,195.467z"
          />
        </g>
      </Tooltip>

      {/* Info box on click */}
      {clicked && (
        <foreignObject x="300" y="150" width="250" height="100">
          <div className="bg-white text-black p-2 rounded shadow-lg">
            <h3 className="font-bold">{info.name}</h3>
            <p className="text-sm">{info.description}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
