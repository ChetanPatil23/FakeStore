import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "./Header";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products").catch(
      (err) => console.log(err)
    );
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="ui grid container" style={{ marginTop: "30px" }}>
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
