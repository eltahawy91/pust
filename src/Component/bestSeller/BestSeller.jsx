import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "../products/product.css";
import CardJson from "../cardJson/CardJson";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);
  
  const productData = book.map((book) => {
    return <CardJson book={book} key={book.id} />;
  });
  // console.log(productData);
  return (
    <>
      {book.length === 0 ? null : (
        <div className="product-list p-5">
          <div className="container overflow-x-hidden">
            <div className="row">
              <h3 className="text-start col-6">Our New Products</h3>
              <Link
                to="/ViewAllProducts"
                className="btn btn-close-white col-6 text-end ms-auto w-25"
              >
                View All Product
              </Link>
            </div>

            <div className="row" style={{ paddingTop: "5rem" }}>
              {productData.slice(0, 4).map((product, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  {product}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
