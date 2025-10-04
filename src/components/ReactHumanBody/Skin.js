import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";

class Skin extends Component {
  render() {
    const { fillColor = "#808080", fillOpacity = 0.5, onClick } = this.props;
    return (
      <Tooltip title="Skin" placement="right">
        <g
          id="skin"
          className="skin"
          fill={fillColor}
          fillOpacity={fillOpacity}
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          <path d="M315.75,197.5c0.669,4.716,3.612,8.76,5.105,13.263c1.392,4.198-1.286,17.414,3.933,19.572..."/>
        </g>
      </Tooltip>
    );
  }
}

export default Skin;

