import React, { useEffect, useState } from "react";
import CardJson from "../Component/cardJson/CardJson";
import Navbar from "../Component/Navbar/Navbar";

const ViewAllProducts = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  const productData = book.map((book) => {
    return <CardJson book={book} key={book.id} />;
  });

  // const [filteredBooks, setFilteredBooks] = useState(book);

  // const filterProducts = (category) => {
  //   const filterItems = book.filter((newVal) => newVal.category === category);
  //   setFilteredBooks(filterItems);
  // };

  // const menuItems = [...new Set(book.map((val) => val.category))];
  // useEffect(() => {
  //   // Update filteredBooks when book changes
  //   setFilteredBooks(book);
  // }, [book]);

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 row">
            <div
              className="col-lg-12  col-sm-12 row"
              style={{ rowGap: "40px" }}
            >
              {/* <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    Category
                  </h2>

                  <div className="accordion-body">
                    {menuItems.map((val, index) => (
                      <button
                        key={index}
                        className="w-100 border-0 bg-transparent text-start my-2"
                        onClick={() => filterProducts(val)}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              </div> */}
              {productData.map((product, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                    {product}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

            
    </>
  );
};

export default ViewAllProducts;
