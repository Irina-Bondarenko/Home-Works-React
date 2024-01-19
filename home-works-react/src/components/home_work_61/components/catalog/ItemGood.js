import { Component } from "react";
import * as React from "react";
import "./css/item-good.css";
class ItemGood extends Component {
    render() {
        const { props } = this.props;
        const {
            isInStock, isNew, isSale, photo, id, title, description, price, rating,} = props;

        return (
            <div className="card">
                <div className="card-content-wrapper">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{price}</p>
                    <img className="good-img" src={`${photo}?v=${id}`} alt={id} />
                </div>
            </div>
        );
    }
}

export { ItemGood };