import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "./Header";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products").catch(
      (err) => console.log(err)
    );
    console.log(response.data);
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
