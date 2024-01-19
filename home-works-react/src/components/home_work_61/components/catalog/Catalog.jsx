import React, { Component } from "react";
import { Goods } from "./Goods";
import { Categories } from "./Categories";
import "./css/catalog.css";
import { Filters } from "./Filters";

class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <div className="container">
          <div className="row">
            <div className="catalog-categories col-3">
              <Categories />
            </div>
            <div className="catalog-goods col-9">
              <div className="goods-filters">
                <Filters />
              </div>
              <div className="goods-goods d-flex">
                <Goods />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Catalog };
