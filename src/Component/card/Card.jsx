import React from "react";
import "./card.css";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Card = (props) => {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card-book position-relative ">
          <a href="/">
            <figure className="pb-0">
              <img
                src={props.product.volumeInfo.imageLinks.thumbnail}
                className="card-img-top"
                alt={props.product.volumeInfo.imageLinks.thumbnail}
              />
            </figure>
          </a>
          <div className="tp-product-badge">
            <span className="product-hot">
              {props.product.saleInfo.saleability}
            </span>
          </div>

          <div className="hover-btns position-absolute d-flex m-auto">
            <button
              className="single-btn bg-white"
              onClick={() =>
                increaseCartQuantity(props.product.id, props.product.title)
              }
            >
              <FaShoppingBasket className="text-gray" />
            </button>

            <Link to={`/Book/${props.product.id}`} className="single-btn">
              <AiFillEye />
            </Link>
          </div>
          <div className="card-body text-left pb-0">
            <h5 className="card-title mb-2">
              {props.product.volumeInfo.categories}
            </h5>
            <p style={{ lineHeight: "1.4" }}>
              {props.product.volumeInfo.title}
            </p>
          </div>
          {/* <Link to={`/Book/${props.product.id}`}>
          <button className="btn m-auto">add to card</button>
        </Link> */}
        </div>
      </div>
    </>
  );
};

export default Card;
