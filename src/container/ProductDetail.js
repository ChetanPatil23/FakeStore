import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  setSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductDetail = async () => {
    setIsLoading(true);
    const response = await axios(
      `https://fakestoreapi.com/products/${productId}`
    ).catch((err) => console.log(err));
    setIsLoading(false);
    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <>
      <Header />
      <div style={{ margin: "80px" }}>
        {isLoading ? (
          <h2 style={{ fontSize: "35px", color: "blue" }}>Loading ...</h2>
        ) : (
          <>
            <h2>Product Detail - {productId}</h2>
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src={image} />
                  </div>
                  <div className="column rp">
                    <h1>{title}</h1>
                    <h2>
                      <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
