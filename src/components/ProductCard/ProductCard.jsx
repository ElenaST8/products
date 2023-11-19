import React from "react";

const ProductCard = ({ productName, price, quantity }) => {
  return (
    <div className="common-product-card">
      <div>{`Product: ${productName}`}</div>
      <div>{`Price: ${price}`}</div>
      <div>{`Quantity: ${quantity}`}</div>
    </div>
  );
};

export default ProductCard;
