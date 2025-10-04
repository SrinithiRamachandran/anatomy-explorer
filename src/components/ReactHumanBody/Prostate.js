import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class Prostate extends Component {
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
          id="prostate"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          onClick={this.handleClick}
          d="M247.002,345.606
             c0,3.913-4.729,7.085-10.55,7.085c-5.829,0-10.557-3.172-10.557-7.085
             s4.729-7.085,10.557-7.085C242.28,338.521,247.002,341.694,247.002,345.606z"
        />
      </Tooltip>
    );
  }
}

Prostate.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

Prostate.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347",
  tooltipTitle: "Prostate",
  data: { name: "Prostate", function: "Secretes prostate fluid, part of the male reproductive system" },
  onSelect: null,
};

export default Prostate;
