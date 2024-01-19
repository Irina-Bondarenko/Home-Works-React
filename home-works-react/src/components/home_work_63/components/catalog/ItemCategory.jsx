import * as React from "react";
import "./css/item-category.css";
import PropTypes from "prop-types";

export function ItemCategory(props) {
  const { category, categoryHandler } = props;

  const onClickCategoryHandler = () => {
    categoryHandler(category.id);
  };

  return (
    <div className="category">
      <h3 onClick={onClickCategoryHandler}>{category.name}</h3>
    </div>
  );
}

ItemCategory.propTypes = {
  category: PropTypes.object,
  categoryHandler: PropTypes.func,
};

ItemCategory.defaultProps = {
  category: {},
};
