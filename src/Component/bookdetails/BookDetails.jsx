import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./boodetails.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const BookDetails = () => {
  const params = useParams();
  const api_url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
  const [book, setBook] = useState([]);
  var [counter, setCounter] = useState(0);
  const { increaseCartQuantity } = useShoppingCart();

  const increament = () => {
    setCounter(() => counter++);
  };
  const decreament = () => {
    setCounter(() => {
      return counter < 1 ? counter : counter--;
    });
  };

  useEffect(() => {
    fetch(`${api_url}/${params.BookId}`)
      .then((response) => response.json())
      .then((data) => setBook(data.items));
  }, []);
  const bookData = book || {};
  const productDetails = bookData.map((item) => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      publisher: item.volumeInfo.publisher,
      authors: item.volumeInfo.authors,
      desc: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      imgaes: item.volumeInfo.imageLinks.thumbnail,
      infoLink: item.volumeInfo.infoLink,
      pageCount: item.volumeInfo.pageCount,
    };
  });

  return (
    <>
      {productDetails.map((detail, index) => (
        <div key={index}>
          <div className="bg-details">
            <div className="container-fluid py-5">
              <div className="row px-xl-5">
                <div className="col-lg-5 col-md-6 col-sm-12 mb-30">
                  <Carousel showArrows={true}>
                    <div>
                      <img
                        className=" m-auto d-block p-4"
                        id="magnifying_img"
                        src={detail.imgaes}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="m-auto d-block p-4"
                        id="magnifying_img"
                        src={detail.imgaes}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className=" m-auto d-block p-4"
                        id="magnifying_img"
                        src={detail.imgaes}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className=" m-auto d-block p-4"
                        id="magnifying_img"
                        src={detail.imgaes}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className=" m-auto d-block p-4"
                        id="magnifying_img"
                        src={detail.imgaes}
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 ">
                  <div className=" p-4">
                    <h3>{detail.title}</h3>
                    <div className="d-flex gap-3 publishersBook">
                      <div className="fs-6 mb-1 ">
                        <span className="me-3 fw-medium">By(author)</span>
                        <span className="ml-2 text-gray-600">
                          {detail.authors}
                        </span>
                      </div>
                      <div className="fs-6 mb-1 ">
                        <span className="me-3 fw-medium">By(Publisher)</span>
                        <span className="ml-2 text-gray-600">
                          {detail.publisher}
                        </span>
                      </div>
                    </div>
                    <div className="fw-bold mb-2">
                      Category : &nbsp;
                      <span>{detail.categories}</span>
                    </div>
                    <div className="fw-bold mb-2">
                      Num Of Pages : &nbsp;
                      <span>{detail.pageCount}</span>
                    </div>

                    <div className=" fw-bold  mb-2">
                      Read From Here : &nbsp;
                      <Link target="_blank" to={detail.infoLink}>
                        Read Now
                      </Link>
                    </div>

                    <p className="mb-4">
                      {detail.desc && detail.desc.slice(0, 300)}
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
                            increaseCartQuantity(detail.id, detail.title)
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
        </div>
      ))}
    </>
  );
};

export default BookDetails;
