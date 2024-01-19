import { ItemGood } from "./ItemGood";
import "./css/goods.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { memo, useCallback } from "react";

export const Goods = memo((props) => {
  // console.log("Goods is rendering now");
  const { goods, allProductAmount, clearAllFiltersHandler } = props;

  const clearAllFiltersButtonHandler = useCallback(() => {
    clearAllFiltersHandler();
  }, []);

  return (
    <div className="goods-wrapper">
      <h2 className="qty-of-found">
        Founded {goods.length} of {allProductAmount}
      </h2>
      <div className="filter-reset">
        <Button
          onClick={clearAllFiltersButtonHandler}
          type="submit"
          variant="contained"
        >
          Clear All Filters
        </Button>
      </div>
      <div className="goods">
        {goods.map((item) => (
          <ItemGood key={item.id} good={item} />
        ))}
      </div>
    </div>
  );
});

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      id: PropTypes.string,
      isInStock: PropTypes.bool,
      isNew: PropTypes.bool,
      isSale: PropTypes.bool,
      photo: PropTypes.string,
      price: PropTypes.string,
      rating: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  allProductAmount: PropTypes.number,
  clearAllFiltersHandler: PropTypes.func,
};

Goods.defaultProps = {
  goods: [],
  allProductAmount: null,
};
