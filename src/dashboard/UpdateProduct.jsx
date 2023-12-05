import React, { useEffect, useState } from "react";
import Aside from "./sidebar/Aside";
import Navbar from "../Component/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./sidebar/sidebar.css";
const UpdateProduct = () => {
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  const params = useParams();
  const productId = params.productId;
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/eltahawy91/pustokapi/Products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setProductInfo(product);
  }, [product]);

  // const getData = () => {
  //   // title = productInfo.title;
  //   price = productInfo.price;
  //   category = productInfo.category;
  //   publisher = productInfo.publisher;
  //   salsabilty = productInfo.salsabilty;
  //   image = productInfo.ProductImage;
  //   author = productInfo.author;
  //   numPages = productInfo.numPages;
  //   desc = productInfo.desc;
  // };
  // getData();

  var [updatetitle, setUpdateTitle] = useState("");
  var [updateprice, setUpdatePrice] = useState();
  var [updatecategory, setUpdateCategory] = useState("");
  var [updatepublisher, setUpdatePublisher] = useState("");
  var [updatedesc, setUpdateDsc] = useState("");
  var [updateauthor, setUpdateAuthor] = useState("");
  var [updatesalsabilty, setUpdateSalsabilty] = useState("");
  var [updatenumPages, setUpdateNumPages] = useState();
  var [updateimage, setUpdateImage] = useState(null);
  const updateProduct = async (e) => {
    e.preventDefault();

    const res = await axios.put(`https://my-json-server.typicode.com/eltahawy91/pustokapi/Products/${productId}`, {
      title: updatetitle,
      price: updateprice,
      category: updatecategory,
      publisher: updatepublisher,
      author: updateauthor,
      salsabilty: updatesalsabilty,
      numPages: updatenumPages,
      ProductImage: updateimage,
      desc: updatedesc,
    });
    console.log(res.data);
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
            onSubmit={updateProduct}
          >
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  // placeholder={title}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                  // value={title}
                  contentEditable="true"
                />
                <label htmlFor="floatingInput">Product Title</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={price}
                  onChange={(e) => setUpdatePrice(e.target.value)}
                />
                <label htmlFor="floatingPassword">Price</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={category}
                  onChange={(e) => setUpdateCategory(e.target.value)}
                />
                <label htmlFor="floatingPassword">category</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={salsabilty}
                  onChange={(e) => setUpdateSalsabilty(e.target.value)}
                />
                <label htmlFor="floatingPassword">Salsabilty</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={author}
                  onChange={(e) => setUpdateAuthor(e.target.value)}
                />
                <label htmlFor="floatingPassword">Author</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={publisher}
                  onChange={(e) => setUpdatePublisher(e.target.value)}
                />
                <label htmlFor="floatingPassword">Publisher</label>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={numPages}
                  onChange={(e) => setUpdateNumPages(e.target.value)}
                />
                <label htmlFor="floatingPassword">num of pages</label>
              </div>
            </div>
            <div className="col-md-12">
              {" "}
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={image}
                  onChange={(e) => setUpdateImage(e.target.value)}
                />
                <label htmlFor="floatingPassword">Product Image</label>
              </div>
            </div>
            <div className="col-md-12">
              {" "}
              <div className="form-floating mb-3">
                <textarea
                  required
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder={desc}
                  // value={desc}
                  onChange={(e) => setUpdateDsc(e.target.value)}
                ></textarea>
                <label htmlFor="floatingPassword">Description</label>
              </div>
            </div>
            {error && <span>{error}</span>}
            <div className="col-md-6">
              {" "}
              <div className="form-floating mb-3">
                <button className="btn btn-success"> Update Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
