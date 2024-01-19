import { Goods } from "./Goods";
import { Categories } from "./Categories";
import "./css/catalog.css";
import { Filters } from "./Filters";
import { queryState } from "./css/queryState";
import { getProductList } from "./api";
import { getCategoriesList } from "./api";
import { useState, useEffect, useCallback } from "react";
import {FormApply} from "../form-apply/FormApply";
import {FormCountry} from "../form-apply/FormCountry";

export function Catalog() {
  // console.log("Catalog is rendering now");
  const [goods, setGoods] = useState([]);
  const [goodsQueryStatus, setGoodsProductsQueryStatus] = useState(
    queryState.initial
  );
  const [goodsQueryError, setGoodsProductsQueryError] = useState(
    queryState.initial
  );

  const [categories, setCategories] = useState([]);
  const [categoriesQueryStatus, setCategoriesQueryStatus] = useState(
    queryState.initial
  );
  const [categoriesQueryError, setCategoriesQueryError] = useState(
    queryState.initial
  );

  const [titleFilterValue, setTitleFilterValue] = useState("");
  const [priceFilterMin, setPriceFilterMin] = useState(0);
  const [priceFilterMax, setPriceFilterMax] = useState(1000);
  const [ratingFilter, setRatingFilter] = useState(100);
  const [isNewFilter, setIsNewFilter] = useState(false);
  const [isInStockFilter, setIsInStockFilter] = useState(false);
  const [isSaleFilter, setIsSaleFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");

  const loadProductList = () => {
    setGoodsProductsQueryStatus(queryState.loading);
    getProductList()
      .then((productList) => {
        setGoodsProductsQueryStatus(queryState.success);
        setGoodsProductsQueryError(null);
        setGoods(productList);
      })
      .catch((error) => {
        setGoodsProductsQueryStatus(queryState.error);
        setGoodsProductsQueryError(error);
      });
  };

  const loadCategories = () => {
    setCategoriesQueryStatus(queryState.loading);

    getCategoriesList()
      .then((categoriesList) => {
        setCategoriesQueryStatus(queryState.success);
        setCategoriesQueryError(null);
        setCategories(categoriesList);
      })
      .catch((error) => {
        setCategoriesQueryStatus(queryState.error);
        setCategoriesQueryError(error);
      });
  };

  useEffect(() => {
    loadProductList();
    loadCategories();
  }, []);

  const getFilteredProducts = () => {
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
  };

  const searchHandler = useCallback((value) => {
    setTitleFilterValue(value);
  }, []);

  const priceHandler = useCallback((priceMin, priceMax) => {
    setPriceFilterMin(priceMin);
    setPriceFilterMax(priceMax);
  }, []);

  const ratingHandler = useCallback((value) => {
    setRatingFilter(value);
  }, []);

  const isNewCheckboxHandler = useCallback((value) => {
    setIsNewFilter(value);
  }, []);

  const isSaleCheckboxHandler = useCallback((value) => {
    setIsSaleFilter(value);
  }, []);

  const isInStockCheckboxHandler = useCallback((value) => {
    setIsInStockFilter(value);
  }, []);

  const categoryHandler = useCallback((value) => {
    setCategoryFilter(value);
  }, []);

  const clearAllFiltersHandler = useCallback(() => {
    setTitleFilterValue("");
    setPriceFilterMin(0);
    setPriceFilterMax(1000);
    setRatingFilter(100);
    setIsNewFilter(false);
    setIsInStockFilter(false);
    setIsSaleFilter(false);
    setCategoryFilter("");
  }, []);

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

  const filteredGoods = getFilteredProducts();
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
                categoryHandler={categoryHandler}
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
                searchHandler={searchHandler}
                priceHandler={priceHandler}
                ratingHandler={ratingHandler}
                isNewCheckboxHandler={isNewCheckboxHandler}
                isSaleCheckboxHandler={isSaleCheckboxHandler}
                isInStockCheckboxHandler={isInStockCheckboxHandler}
              />
            </div>
            <div className="goods-goods d-flex">
              {isLoadingProducts && <div>Loading Products...</div>}
              {!isLoadingProducts && isSuccessProducts && (
                <Goods
                  goods={filteredGoods}
                  allProductAmount={goods.length}
                  clearAllFiltersHandler={clearAllFiltersHandler}
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
      {/*<FormApply />*/}
    </div>

  );
}
