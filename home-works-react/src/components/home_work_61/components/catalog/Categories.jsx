import React, { Component } from "react";
import { ItemGood } from "./ItemGood";
import "./css/categories.css";
import { ItemCategory } from "./ItemCategory";
import Button from "@mui/material/Button";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [],
    };
  }

  getData = async () => {
    try {
      const dataFetch = await fetch(
        "https://61f5558a62f1e300173c40f3.mockapi.io/categories"
      );
      const data = await dataFetch.json();

      this.setState({ goods: data });
    } catch (e) {
      await console.dir(e);
    }
  };

  render() {
    const { goods } = this.state;
    return (
      <div>
        <div className="button-categories-loading">
          <Button onClick={this.getData} size="medium" variant="contained">
            Click for categories loading
          </Button>
        </div>

        <div className="categories">
          {goods.map((item) => (
            <ItemCategory key={item.id} props={item} />
          ))}
        </div>
      </div>
    );
  }
}

export { Categories };
