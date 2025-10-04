import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import { Popover, Typography } from "@mui/material";

class UrinaryBladder extends Component {
  state = {
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'bladder-popover' : undefined;

    // Example data for Urinary Bladder
    const organData = {
      name: "Urinary Bladder",
      function: "Stores urine until it is excreted from the body.",
      location: "Lower abdomen, behind the pubic bone."
    };

    return (
      <>
        <Tooltip title={organData.name} placement="right">
          <path
            id="urinary_bladder"
            className="urinary_bladder"
            fill="#808080"
            fillOpacity="0.5"
            stroke="#787878"
            strokeWidth="0.5"
            d="M231.739,325.129
               c-15.16-2.202-28.836,18.655-9.9,21.638C236,349,251.281,331.751,232.759,325.776"
            onClick={this.handleClick} // show popover on click
          />
        </Tooltip>

        <Popover
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div style={{ padding: "10px", maxWidth: "250px" }}>
            <Typography variant="h6">{organData.name}</Typography>
            <Typography variant="body2"><b>Function:</b> {organData.function}</Typography>
            <Typography variant="body2"><b>Location:</b> {organData.location}</Typography>
          </div>
        </Popover>
      </>
    );
  }
}

export default UrinaryBladder;
