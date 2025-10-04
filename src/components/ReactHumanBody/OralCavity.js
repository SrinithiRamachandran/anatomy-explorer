import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';

class OralCavity extends Component {
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
          id="oral_cavity"
          fill={selected ? selectedColor : fillColor}
          fillOpacity="0.7"
          onClick={this.handleClick}
          d="M242.935,83.96c0,2.6-5.368,4.707-11.994,4.707
             c-6.623,0-11.986-2.107-11.986-4.707s5.363-4.707,11.986-4.707
             C237.565,79.253,242.935,81.36,242.935,83.96z"
        />
      </Tooltip>
    );
  }
}

OralCavity.propTypes = {
  fillColor: PropTypes.string,
  selectedColor: PropTypes.string,
  tooltipTitle: PropTypes.string,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

OralCavity.defaultProps = {
  fillColor: "#808080",
  selectedColor: "#FF6347",
  tooltipTitle: "Oral Cavity",
  data: { name: "Oral Cavity", function: "Mouth area for ingestion and speech" },
  onSelect: null,
};

export default OralCavity;
