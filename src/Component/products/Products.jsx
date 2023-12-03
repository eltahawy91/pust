import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./product.css";

const Products = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`)
      .then((response) => response.json())
      .then((data) => setBook(data.items));
  }, []);
  const productData = book.map((product) => {
    return <Card product={product} key={product.id} />;
  });
  // console.log(productData);
  return (
    <>
      <div className="product-list p-5">
        <div className="container overflow-x-hidden">
          <h3 className="text-start">Best Seller</h3>

          <div className="py-5">
            <div className="row" style={{rowGap:"25px"}}>{productData}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
