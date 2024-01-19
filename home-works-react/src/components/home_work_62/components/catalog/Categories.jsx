import "./css/categories.css";
import { ItemCategory } from "./ItemCategory";
import PropTypes from "prop-types";

export function Categories(props) {
  const { categories, categoryFilter, categoryHandler } = props;
  return (
    <div className="categories-wrapper">
      <div className="categories">
        {categories.map((item) => (
          <ItemCategory
            key={item.id}
            category={item}
            categoryHandler={categoryHandler}
            categoryFilter={categoryFilter}
          />
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  categoryFilter: PropTypes.string,
  categoryHandler: PropTypes.func,
};

Categories.defaultProps = {
  categories: [],
  categoryFilter: [],
};
