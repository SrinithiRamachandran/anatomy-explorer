import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";

class SkeletalMuscle extends Component {
  render() {
    const { fillColor = "#808080", fillOpacity = 0.5, onClick } = this.props;
    return (
      <Tooltip title="Skeletal Muscle" placement="right">
        <g
          id="skeletal_muscle"
          className="skeletal_muscle"
          fill={fillColor}
          fillOpacity={fillOpacity}
          transform="translate(34.453243,16.994796)"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          <path d="M161.585,423.519c-3.51-12.462-5.706-25.672-5.7-34.291..."/>
          <path d="M149.519,436.247c-4.27-10.709-6.329-18.451-7.793-29.313..."/>
          <path d="M150.749,474.676c0-2.633-3.106-11.146-5.079-13.923..."/>
          <path d="M155.71,469.382c-0.081-0.081-0.148-1.115-0.148-2.298..."/>
          <path d="M166.068,472.821c-2.396-0.818-2.842-1.092-3.034-1.813..."/>
        </g>
      </Tooltip>
    );
  }
}

export default SkeletalMuscle;