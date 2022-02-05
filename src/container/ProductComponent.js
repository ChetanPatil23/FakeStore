import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { title, desc } = products[0];

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
              alt="img"
            />
          </div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
