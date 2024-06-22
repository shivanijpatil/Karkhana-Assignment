import React from "react";
import "../css/ProductList.css";

const ProductList = ({ data, addToCart }) => {
  return (
    <div id="items">
      {data.map((ele, index) => (
        <div className="products" key={index}>
          <img
            src={ele.image}
            alt={ele.title}
          />
          <p>{ele.title}</p>
          <p className="price">${ele.price.toFixed(2)}</p>
          <button onClick={() => addToCart(ele)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
