import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "./Header";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await axios("https://fakestoreapi.com/products").catch(
      (err) => console.log(err)
    );
    dispatch(setProducts(response.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="ui grid container" style={{ marginTop: "30px" }}>
        {isLoading ? (
          <h2 style={{ fontSize: "25px", color: "blue" }}>
            Fetching Products For You ...
          </h2>
        ) : (
          <ProductComponent />
        )}
      </div>
    </>
  );
};

export default ProductListing;
