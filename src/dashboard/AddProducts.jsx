import React, { useEffect, useState } from "react";
import Aside from "./sidebar/Aside";
import Navbar from "../Component/Navbar/Navbar";
import axios from "axios";
const AddProducts = () => {
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [desc, setDsc] = useState("");
  const [author, setAuthor] = useState("");
  const [salsabilty, setSalsabilty] = useState("");
  const [numPages, setNumPages] = useState();
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/eltahawy91/pustokapi/Products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const addProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://my-json-server.typicode.com/eltahawy91/pustokapi/Products",
      data: {
        title: title,
        price: price,
        category: category,
        publisher: publisher,
        salsabilty: salsabilty,
        ProductImage: image,
        author: author,
        numPages: numPages,
        desc: desc,
      },
    });
    setTitle("");
    setPrice("");
    setCategory("");
    setError("");
    setImage("");
    setPublisher("");
    setSalsabilty("");
    setAuthor("");
    setNumPages("");
    setDsc("");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            {" "}
            <Aside />
          </div>
          <form
            name="productForm"
            className="col-lg-12 col-md-6 col-sm-12 row mt-4"
            onSubmit={addProduct}
          >
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Product Name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <label htmlFor="floatingInput">Product Title</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
                <label htmlFor="floatingPassword">Price</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
                <label htmlFor="floatingPassword">category</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Salsabilty"
                  onChange={(e) => setSalsabilty(e.target.value)}
                  value={salsabilty}
                />
                <label htmlFor="floatingPassword">Salsabilty</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Publisher"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
                <label htmlFor="floatingPassword">Author</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Publisher"
                  onChange={(e) => setPublisher(e.target.value)}
                  value={publisher}
                />
                <label htmlFor="floatingPassword">Publisher</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Num Of Pages"
                  onChange={(e) => setNumPages(e.target.value)}
                  value={numPages}
                />
                <label htmlFor="floatingPassword">num of pages</label>
              </div>
            </div>
            <div className="col-md-12">
              {" "}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Product Image"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
                <label htmlFor="floatingPassword">Product Image</label>
              </div>
            </div>
            <div className="col-md-12">
              {" "}
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Description"
                  onChange={(e) => setDsc(e.target.value)}
                  value={desc}
                ></textarea>
                <label htmlFor="floatingPassword">Description</label>
              </div>
            </div>
            {error && <span>{error}</span>}
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <button className="btn btn-success"> Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
