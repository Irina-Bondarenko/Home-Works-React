import { ItemGood } from "./ItemGood";
import "./css/goods.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export function Goods(props) {
  const { goods, allProductAmount, clearAllFiltersHandler } = props;

  const clearAllFiltersButtonHandler = () => {
    clearAllFiltersHandler();
  };

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
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
  allProductAmount: PropTypes.number,
  clearAllFiltersHandler: PropTypes.func,
};

Goods.defaultProps = {
  goods: [],
  allProductAmount: [],
};
