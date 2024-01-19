import React, { PureComponent} from "react";
import { ItemGood } from "./ItemGood";
import "./css/goods.css";
import PropTypes from 'prop-types';

class Goods extends PureComponent {

  render() {
    const { goods, allProductAmount } = this.props;

    return (
      <div className="goods-wrapper">
          <h2>Founded {goods.length} of {allProductAmount}</h2>
            <div className="goods">
              {goods.map((item) => (
                  <ItemGood key={item.id} good={item} />
              ))}
            </div>
      </div>
    );
  }

}

Goods.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.object),
    allProductAmount: PropTypes.number,
}

Goods.defaultProps = {
    goods: [],
    allProductAmount: [],
}

export { Goods };
