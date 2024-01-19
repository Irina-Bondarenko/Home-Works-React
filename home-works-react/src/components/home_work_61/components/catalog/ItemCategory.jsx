import { Component } from "react";
import * as React from "react";
import "./css/item-category.css";

class ItemCategory extends Component {
  render() {
    const { props } = this.props;

    return (
      <div className="category">
        <h3>{props.name}</h3>
      </div>
    );
  }
}

export { ItemCategory };
