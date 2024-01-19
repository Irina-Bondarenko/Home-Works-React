import * as React from "react";
import "./css/item-good.css";
import PropTypes from "prop-types";
import { memo } from "react";

export const ItemGood = memo((props) => {
  const { good } = props;
  const { isInStock, isNew, isSale, photo, id, title, description, price } =
    good;

  return (
    <div className="card">
      <div className="card-content-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">
          <b>Price is: {price} $</b>
        </p>
        <img className="good-img" src={`${photo}?v=${id}`} alt={id} />
        {isNew && <p className="new-product">NEW PRODUCT</p>}
        {isInStock && <p className="in-stock-product">PRODUCT IS IN STOCK</p>}
        {isSale && <p className="in-sale-product">SALE!!!</p>}
      </div>
    </div>
  );
});

ItemGood.propTypes = {
  good: PropTypes.shape({
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
  }),
};

ItemGood.defaultProps = {
  good: {},
};
