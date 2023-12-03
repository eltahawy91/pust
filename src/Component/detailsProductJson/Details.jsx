import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "../bookdetails/boodetails.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Details = () => {
  const { increaseCartQuantity, favProduct } = useShoppingCart();

  const params = useParams();
  const api_url = "http://localhost:9000/products";
  const [bookJson, setBookJson] = useState([]);

  // const increament = () => {
  //   setCounter(() => counter++);
  // };
  // const decreament = () => {
  //   setCounter(() => {
  //     return counter < 1 ? counter : counter--;
  //   });
  // };

  useEffect(() => {
    fetch(`${api_url}/${params.JsonBookId}`)
      .then((response) => response.json())
      .then((data) => setBookJson(data));
  }, []);

  return (
    <>
      <div className="bg-details">
        <div className="container-fluid py-5">
          <div className="row px-xl-5">
            <div className="col-lg-5 col-md-6 col-sm-12 mb-30">
              <Carousel showArrows={true}>
                <div>
                  <img
                    className=" m-auto d-block p-4"
                    id="magnifying_img"
                    src={bookJson.ProductImage}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="m-auto d-block p-4"
                    id="magnifying_img"
                    src={bookJson.ProductImage}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className=" m-auto d-block p-4"
                    id="magnifying_img"
                    src={bookJson.ProductImage}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className=" m-auto d-block p-4"
                    id="magnifying_img"
                    src={bookJson.ProductImage}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className=" m-auto d-block p-4"
                    id="magnifying_img"
                    src={bookJson.ProductImage}
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 ">
              <div className=" p-4">
                <h3>{bookJson.title}</h3>
                <div className="d-flex gap-3 publishersBook">
                  <div className="fs-6 mb-1 ">
                    <span className="me-3 fw-medium">By(author)</span>
                    <span className="ml-2 text-gray-600">
                      {bookJson.author}
                    </span>
                  </div>
                  <div className="fs-6 mb-1 ">
                    <span className="me-3 fw-medium">By(Publisher)</span>
                    <span className="ml-2 text-gray-600">
                      {bookJson.publisher}
                    </span>
                  </div>
                </div>
                <div className="fw-bold mb-2">
                  Category : &nbsp;
                  <span>{bookJson.category}</span>
                </div>
                <div className="fw-bold mb-2">
                  Price : &nbsp;
                  <span>{bookJson.price} $</span>
                </div>
                <div className="fw-bold mb-2">
                  Num Of Pages : &nbsp;
                  <span>{bookJson.numPages}</span>
                </div>

                <p className="mb-4">
                  {bookJson.desc && bookJson.desc.slice(0, 300)}
                </p>
                <div className="resposive-add row ">
                  <div className="col-lg-6 col-6">
                    {/* <div className="input-group quantity gap-3 mr-3 justify-content-start ">
                      <div className="input-group-btn">
                        <button
                          className="btn btn-primary btn-minus"
                          onClick={decreament}
                        >
                          <AiOutlineMinus />
                        </button>
                      </div>
                      <input
                        type="number"
                        readOnly
                        className="form-control-count border-0 text-center"
                        value={counter}
                      />
                      <div className="input-group-btn">
                        <button
                          className="btn btn-primary btn-plus"
                          onClick={increament}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-6 col-12 row ">
                    <button
                      className="axil-btn btn-bg-primary add-card"
                      onClick={() =>
                        increaseCartQuantity(bookJson.id, bookJson.title)
                      }
                    >
                      ADD TO CARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
