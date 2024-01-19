import * as React from "react";
import "./css/item-category.css";
import PropTypes from "prop-types";
import { memo, useCallback } from "react";

export const ItemCategory = memo((props) => {
  const { category, categoryHandler } = props;

  const onClickCategoryHandler = useCallback(() => {
    categoryHandler(category.id);
  }, []);

  return (
    <div className="category">
      <h3 onClick={onClickCategoryHandler}>{category.name}</h3>
    </div>
  );
});

ItemCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  categoryHandler: PropTypes.func,
};

ItemCategory.defaultProps = {
  category: {},
};
