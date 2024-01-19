import React, { Component } from "react";
import { ItemGood } from "./ItemGood";
import "./css/goods.css";
import Button from "@mui/material/Button";

class Goods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [],
    };
  }

  getData = async () => {
    try {
      const dataFetch = await fetch(
        "https://61f5558a62f1e300173c40f3.mockapi.io/products"
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
        <div className="button-goods-loading">
          <Button onClick={this.getData} size="medium" variant="contained">
            Click for goods loading
          </Button>
        </div>

        <div className="goods">
          {goods.map((item) => (
            <ItemGood key={item.id} props={item} />
          ))}
        </div>
      </div>
    );
  }
}

export { Goods };
