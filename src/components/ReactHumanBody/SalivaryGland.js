import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class SalivaryGland extends Component {
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
          id="salivary_gland"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          onClick={this.handleClick}
          d="M246.531,85.95
             c-4.238,0.646-8.267,1.739-12.275,3.365c0.6,1.688,3.96,1.814,5.461,1.951
             c2.119,0.195,5.41,0.386,6.779-1.519
             C247.502,88.338,247.484,86.854,246.531,85.95z"
        />
      </Tooltip>
    );
  }
}

SalivaryGland.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

SalivaryGland.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347",
  tooltipTitle: "Salivary Gland",
  data: { name: "Salivary Gland", function: "Produces saliva to aid digestion" },
  onSelect: null,
};

export default SalivaryGland;
