import React from "react";

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
        <h2 style={{ letterSpacing: "1.8px" }}>FAKE-SHOP</h2>
      </div>
    </div>
  );
};

export default Header;
