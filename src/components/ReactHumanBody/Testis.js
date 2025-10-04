import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";

class Testis extends Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false };
  }

  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { showInfo } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Male Reproductive System</h1>

        <svg width="500" height="500" style={{ border: "1px solid #ccc", marginTop: "20px" }}>
          <Tooltip title="Testis" placement="right">
            <g
              id="testis"
              className="testis"
              fill="#808080"
              fillOpacity="0.5"
              stroke="#787878"
              strokeWidth="0.5"
              transform="matrix(0.56875117,0,0,0.3849043,165.45861,146.96332)"
              style={{ cursor: "pointer" }}
              onClick={this.toggleInfo}
            >
              <path id="testis1" d="M113.31,613.195
                  c0,11.169-4.713,20.216-10.529,20.216c-5.817,0-10.532-9.047-10.532-20.216c0-11.158,4.715-20.211,10.532-20.211
                  C108.596,592.984,113.31,602.036,113.31,613.195z"/>
              <path id="testis2" d="M139.098,613.195
                  c0,11.169-4.715,20.216-10.532,20.216c-5.814,0-10.529-9.047-10.529-20.216c0-11.158,4.715-20.211,10.529-20.211
                  C134.383,592.984,139.098,602.036,139.098,613.195z"/>
            </g>
          </Tooltip>
        </svg>

        {showInfo && (
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
            <h3>Testis</h3>
            <p><strong>Function:</strong> Produces sperm and male hormones.</p>
            <p><strong>Location:</strong> Inside the scrotum, below the penis.</p>
            <p><strong>Size:</strong> ~4-5 cm in length in adults.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Testis;
