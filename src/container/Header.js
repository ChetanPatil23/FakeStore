import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="ui fixed menu"
      style={{
        padding: "10px 0px",
        backgroundColor: "#6435c9",
        color: "whitesmoke",
        boxShadow: "0px 1px 8px black",
      }}
    >
      <div className="ui container center">
        <Link to="/">
          <h2 style={{ letterSpacing: "1.8px",color:"lavender" }}>FAKE-SHOP</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
