import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => {
        const { title, image, price, category, id } = product;
        return (
          <div className="four wide column" key={id}>
              <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} style={{ height: "250px" }} />
                </div>
                <div className="content" style={{ height: "100px" }}>
                  <div className="header">{title.slice(0, 25)}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
