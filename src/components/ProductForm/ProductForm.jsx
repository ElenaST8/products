import React, { useState } from "react";
import Input from "../Input";
import "./productForm.css";
import ProductCard from "../ProductCard";

const ProductForm = () => {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const onAddProduct = () => {
    const product = {
      productName,
      price,
      quantity,
    };
    setProducts([...products, product]);
    setProductName("");
    setPrice("");
    setQuantity("");
  };

  const onGetProductName = (value) => {
    setProductName(value);
  };

  const onGetPrice = (value) => {
    setPrice(value);
  };

  const onGetQuantity = (value) => {
    setQuantity(value);
  };

  return (
    <div className="common">
      <Input
        label="Product:"
        placeholder="Enter product name"
        onChangeFunction={onGetProductName}
        value={productName}
        type="text"
      />

      <Input
        label="Price:"
        placeholder="Enter price"
        onChangeFunction={onGetPrice}
        value={price}
        type="number"
      />

      <Input
        label="Quantity:"
        placeholder="Enter quantity"
        onChangeFunction={onGetQuantity}
        value={quantity}
        type="number"
      />

      <button type="button" onClick={onAddProduct}>
        Add Product
      </button>

      <div className="products-list">
        {products.map((product, index) => {
          const { productName, price, quantity } = product;
          return (
            <ProductCard
              key={index}
              productName={productName}
              price={price}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductForm;
