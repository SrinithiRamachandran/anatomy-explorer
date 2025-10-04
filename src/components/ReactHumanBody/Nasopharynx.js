import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class Nasopharynx extends Component {
  state = {
    selected: false
  };

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
          id="nasopharynx"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          onClick={this.handleClick}
          d="M228.725,86.377c2.563,0.366,5.119,0.842,7.688,1.115
             c0.758-1.761,1.819-2.986,3.319-3.237c0,0,0.395-0.717,0.395-1.434c0-5.018,0-10.752-0.777-15.769
             c-0.137-0.884-11.658-0.073-12.81,0.073c-1.516,0.191-2.221,1.146-2.244,4.021
             c-0.04,3.875,0.289,7.788,0.289,11.676C226.291,83.084,227.687,84.413,228.725,86.377z"
        />
      </Tooltip>
    );
  }
}

Nasopharynx.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

Nasopharynx.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347", // Tomato red when selected
  tooltipTitle: "Nasopharynx",
  data: { name: "Nasopharynx", function: "Part of the pharynx connecting the nose to the mouth" },
  onSelect: null,
};

export default Nasopharynx;
