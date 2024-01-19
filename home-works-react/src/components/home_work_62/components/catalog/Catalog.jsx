import React from "react";
import { Goods } from "./Goods";
import { Categories } from "./Categories";
import "./css/catalog.css";
import { Filters } from "./Filters";
import { queryState } from "./css/queryState";
import { getProductList } from "./api";
import { getCategoriesList } from "./api";

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      goods: [],
      goodsQueryStatus: queryState.initial,
      goodsQueryError: null,

      categories: [],
      categoriesQueryStatus: queryState.initial,
      categoriesQueryError: null,

      titleFilterValue: "",
      priceFilterMin: 0,
      priceFilterMax: 1000,
      ratingFilter: 100,
      isNewFilter: false,
      isInStockFilter: false,
      isSaleFilter: false,
      categoryFilter: "",
    };
  }

  componentDidMount() {
    this.loadProductList();
    this.loadCategories();
  }

  loadProductList = () => {
    this.setState({
      goodsQueryStatus: queryState.loading,
    });
    getProductList()
      .then((productList) => {
        this.setState({
          goodsQueryStatus: queryState.success,
          goodsQueryError: null,
          goods: productList,
        });
      })
      .catch((error) => {
        this.setState({
          goodsQueryStatus: queryState.error,
          goodsQueryError: error,
        });
      });
  };

  loadCategories = () => {
    this.setState({
      categoriesQueryStatus: queryState.loading,
    });
    getCategoriesList()
      .then((categoriesList) => {
        this.setState({
          categoriesQueryStatus: queryState.success,
          categoriesQueryError: null,
          categories: categoriesList,
        });
      })
      .catch((error) => {
        this.setState({
          categoriesQueryStatus: queryState.error,
          categoriesQueryError: error,
        });
      });
  };

  getFilteredProducts() {
    const {
      goods,
      titleFilterValue,
      priceFilterMin,
      priceFilterMax,
      ratingFilter,
      isNewFilter,
      isInStockFilter,
      isSaleFilter,
      categoryFilter,
    } = this.state;

    return goods.filter((product) => {
      let isPass = true;

      if (titleFilterValue.trim() !== "") {
        let isMatch = product.title
          .toLocaleLowerCase()
          .includes(titleFilterValue.toLocaleLowerCase());
        isPass = isPass && isMatch;
      }

      const price = parseFloat(product.price);
      isPass = isPass && price >= priceFilterMin && price <= priceFilterMax;

      const rating = parseFloat(product.rating);
      isPass = isPass && rating <= ratingFilter;

      if (isInStockFilter) isPass = isPass && product.isInStock;
      if (isNewFilter) isPass = isPass && product.isNew;
      if (isSaleFilter) isPass = isPass && product.isSale;

      const categoriesData = product.categories;
      if (categoryFilter === "") {
        return isPass;
      } else {
        isPass = isPass && categoriesData.includes(categoryFilter);
      }

      return isPass;
    });
  }

  searchHandler = (value) => {
    this.setState({ titleFilterValue: value });
  };
  priceHandler = (priceMin, priceMax) => {
    this.setState({ priceFilterMin: priceMin, priceFilterMax: priceMax });
  };
  ratingHandler = (value) => {
    this.setState({ ratingFilter: value });
  };

  isNewCheckboxHandler = (value) => {
    this.setState(() => {
      return {
        isNewFilter: value,
      };
    });
  };

  isSaleCheckboxHandler = (value) => {
    this.setState(() => {
      return {
        isSaleFilter: value,
      };
    });
  };

  isInStockCheckboxHandler = (value) => {
    this.setState(() => {
      return {
        isInStockFilter: value,
      };
    });
  };

  categoryHandler = (value) => {
    this.setState(() => {
      return {
        categoryFilter: value,
      };
    });
  };

  render() {
    const {
      goods,
      goodsQueryStatus,
      goodsQueryError,
      categories,
      categoriesQueryStatus,
      categoriesQueryError,
      titleFilterValue,
      priceFilterMin,
      priceFilterMax,
      ratingFilter,
      isNewFilter,
      isInStockFilter,
      isSaleFilter,
      categoryFilter,
    } = this.state;

    const isLoadingProducts =
      goodsQueryStatus === queryState.loading ||
      goodsQueryStatus === queryState.initial;
    const isSuccessProducts = goodsQueryStatus === queryState.success;
    const isErrorProducts = goodsQueryStatus === queryState.error;

    const isLoadingCategories =
      categoriesQueryStatus === queryState.loading ||
      categoriesQueryStatus === queryState.initial;
    const isSuccessCategories = categoriesQueryStatus === queryState.success;
    const isErrorCategories = categoriesQueryStatus === queryState.error;

    const filteredGoods = this.getFilteredProducts();
    return (
      <div className="catalog">
        <div className="container">
          <div className="row">
            <div className="catalog-categories col-3">
              {isLoadingCategories && <div>Loading Categories...</div>}

              {!isLoadingCategories && isSuccessCategories && (
                <Categories
                  categories={categories}
                  categoryFilter={categoryFilter}
                  categoryHandler={this.categoryHandler}
                />
              )}

              {isErrorCategories && (
                <div>
                  {categoriesQueryError?.message || "Error with categories :("}
                </div>
              )}
            </div>
            <div className="catalog-goods col-9">
              <div className="goods-filters">
                <Filters
                  titleFilterValue={titleFilterValue}
                  priceFilterMin={priceFilterMin}
                  priceFilterMax={priceFilterMax}
                  ratingFilter={ratingFilter}
                  isNewFilter={isNewFilter}
                  isInStockFilter={isInStockFilter}
                  isSaleFilter={isSaleFilter}
                  categoryFilter={categoryFilter}
                  searchHandler={this.searchHandler}
                  priceHandler={this.priceHandler}
                  ratingHandler={this.ratingHandler}
                  isNewCheckboxHandler={this.isNewCheckboxHandler}
                  isSaleCheckboxHandler={this.isSaleCheckboxHandler}
                  isInStockCheckboxHandler={this.isInStockCheckboxHandler}
                />
              </div>
              <div className="goods-goods d-flex">
                {isLoadingProducts && <div>Loading Products...</div>}
                {!isLoadingProducts && isSuccessProducts && (
                  <Goods
                    goods={filteredGoods}
                    allProductAmount={goods.length}
                  />
                )}

                {!isLoadingProducts && isErrorProducts && (
                  <div>
                    {goodsQueryError?.message || "Error with products :("}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Catalog };
