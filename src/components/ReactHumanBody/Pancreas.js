import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class Pancreas extends Component {
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
          id="pancreas"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          stroke="#787878"
          strokeWidth="0.5"
          onClick={this.handleClick}
          d="M266.973,254.765c-16.765,9.238-29.807,14.289-29.807,14.289
             l-18.568,0.76l-8.433-4.23l-1.955-2.581l1.489-3.148l10.314-4.721l15.551-0.622
             l16.05-4.788l14.233-4.833L268.4,246l1.819,2.807l-0.144,3.391L266.973,254.765z"
        />
      </Tooltip>
    );
  }
}

Pancreas.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

Pancreas.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347",
  tooltipTitle: "Pancreas",
  data: { name: "Pancreas", function: "Produces insulin and digestive enzymes" },
  onSelect: null,
};

export default Pancreas;
