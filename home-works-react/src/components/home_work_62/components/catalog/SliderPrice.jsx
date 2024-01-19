import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import { Filters } from "./Filters";

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export function SliderPrice(props) {
  const [value, setValue] = React.useState([0, 1000]);
  const { priceHandler } = props;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    const priceMin = value[0];
    const priceMax = value[1];

    priceHandler(priceMin, priceMax);
  };

  return (
    <Box sx={{ width: 700, margin: "10px auto" }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={0}
        max={1000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="secondary"
        disableSwap
      />
    </Box>
  );
}

Filters.propTypes = {
  priceHandler: PropTypes.func,
};
