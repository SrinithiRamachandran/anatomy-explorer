// SmallIntestine.js
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const SmallIntestine = () => {
  const [infoVisible, setInfoVisible] = useState(false);

  const handleClick = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Human Digestive System</h1>

      <svg
        width="500"
        height="500"
        style={{ border: "1px solid #ccc", marginTop: "20px" }}
      >
        <Tooltip title="Small Intestine" placement="right">
          <path
            id="small_intestine"
            onClick={handleClick}
            fill="#808080"
            fillOpacity="0.5"
            stroke="#787878"
            strokeWidth="0.5"
            d="M150,150 C170,140 200,200 220,180"
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </svg>

      {infoVisible && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #888",
            display: "inline-block",
            textAlign: "left",
            width: "300px",
          }}
        >
          <h3>Small Intestine</h3>
          <p><strong>Function:</strong> Absorbs nutrients from food.</p>
          <p><strong>Length:</strong> ~6 meters in adults.</p>
          <p><strong>Parts:</strong> Duodenum, Jejunum, Ileum.</p>
        </div>
      )}
    </div>
  );
};

export default SmallIntestine;
