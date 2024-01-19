import * as React from "react";
import TextField from "@mui/material/TextField";
import { SliderPrice } from "./SliderPrice";
import { RatingSIze } from "./RatingSIze";
import { CheckBoxes } from "./CheckBoxes";
import PropTypes from "prop-types";

import "./css/filter.css";

export function Filters(props) {
  const {
    titleFilterValue,
    priceFilterMax,
    priceFilterMin,
    ratingFilter,
    isInStockFilter,
    isNewFilter,
    isSaleFilter,
    searchHandler,
    priceHandler,
    ratingHandler,
    isNewCheckboxHandler,
    isSaleCheckboxHandler,
    isInStockCheckboxHandler,
  } = props;

  const titleChangeHandler = ({ target }) => {
    const value = target.value;
    searchHandler(value);
  };

  return (
    <>
      <div className="searching-filter">
        <TextField
          onChange={titleChangeHandler}
          id="outlined-search"
          value={titleFilterValue}
          label="Search field"
          type="search"
        />
      </div>

      <div className="price-filter">
        <SliderPrice
          priceHandler={priceHandler}
          priceFilterMax={priceFilterMax}
          priceFilterMin={priceFilterMin}
        />
      </div>

      <div className="rating-filter">
        <RatingSIze ratingHandler={ratingHandler} ratingFilter={ratingFilter} />
      </div>

      <div className="checkboxes-filter">
        <CheckBoxes
          isNewFilter={isNewFilter}
          isInStockFilter={isInStockFilter}
          isSaleFilter={isSaleFilter}
          isNewCheckboxHandler={isNewCheckboxHandler}
          isSaleCheckboxHandler={isSaleCheckboxHandler}
          isInStockCheckboxHandler={isInStockCheckboxHandler}
        />
      </div>
    </>
  );
}

Filters.propTypes = {
  titleFilterValue: PropTypes.string,
  priceFilterMin: PropTypes.number,
  priceFilterMax: PropTypes.number,
  ratingFilter: PropTypes.number,
  isNewFilter: PropTypes.bool,
  isInStockFilter: PropTypes.bool,
  isSaleFilter: PropTypes.bool,
  priceHandler: PropTypes.func,
  ratingHandler: PropTypes.func,
  isNewCheckboxHandler: PropTypes.func,
  isSaleCheckboxHandler: PropTypes.func,
  isInStockCheckboxHandler: PropTypes.func,
  searchHandler: PropTypes.func,
};

Filters.defaultProps = {
  titleFilterValue: "",
  priceFilterMin: 0,
  priceFilterMax: 1000,
  ratingFilter: 100,
  isNewFilter: false,
  isInStockFilter: false,
  isSaleFilter: false,
};
