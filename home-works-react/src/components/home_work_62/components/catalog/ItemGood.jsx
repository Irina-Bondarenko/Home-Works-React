import { Component } from "react";
import * as React from "react";
import "./css/item-good.css";
import PropTypes from "prop-types";
import {Categories} from "./Categories";
import {ItemCategory} from "./ItemCategory";
class ItemGood extends Component {
  render() {
    const { good } = this.props;
    const {
      categories, isInStock, isNew, isSale, photo, id, title, description, price, rating,} = good;


    return (
      <div className="card">
        <div className="card-content-wrapper">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="price"><b>Price is: {price} $</b></p>
          <img className="good-img" src={`${photo}?v=${id}`} alt={id} />
          {isNew && <p className="new-product">NEW PRODUCT</p>}
          {isInStock && <p className="in-stock-product">PRODUCT IS IN STOCK</p>}
          {isSale && <p className="in-sale-product">SALE!!!</p>}

        </div>
      </div>
    );
  }
}

ItemGood.propTypes = {
  good: PropTypes.object,
}

ItemGood.defaultProps = {
  good: {},
}

export { ItemGood };
