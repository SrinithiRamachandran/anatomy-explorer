import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class Rectum extends Component {
  state = { selected: false };

  handleClick = () => {
    const { selectedColor, fillColor, data, onSelect } = this.props;
    this.setState(prev => ({ selected: !prev.selected }), () => {
      if (onSelect) onSelect(this.state.selected ? data : null);
    });
  };

  render() {
    const { fillColor, selectedColor, tooltipTitle } = this.props;
    const { selected } = this.state;

    return (
      <Tooltip title={tooltipTitle} placement="right">
        <path
          id="rectum"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          onClick={this.handleClick}
          d="M223.967,342.536
             c-0.104,1.203-0.801,3.146,2.506,3.679c-3.794,0.396-3.435,3.15-1.64,4.247
             c1.69,1.037,5.063,0.811,7.917,0.759c4.135-0.074,5.953-0.347,6.011-2.12
             c0.058-1.813-1.313-2.292-4.68-3.218c3.063-0.572,3.563-2.352,1.068-3.161
             c0.698,0.227,2.316-1.369,1.997-1.697c-0.979-1.007-7.258-1.235-9.489-1.014
             C224.511,340.322,224.072,341.307,223.967,342.536z"
        />
      </Tooltip>
    );
  }
}

Rectum.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

Rectum.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347",
  tooltipTitle: "Rectum",
  data: { name: "Rectum", function: "Stores feces before defecation" },
  onSelect: null,
};

export default Rectum;
