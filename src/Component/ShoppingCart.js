import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import { useParams } from "react-router-dom";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  const [bookJson, setBookJson] = useState([]);
  const api_url = "https://my-json-server.typicode.com/eltahawy91/pustokapi/Products";
  const params = useParams();
  console.log(cartItems);
  useEffect(() => {
    fetch(`${api_url}/${params.JsonBookId}`)
      .then((response) => response.json())
      .then((data) => setBookJson(data));
  }, []);

  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`)
      .then((response) => response.json())
      .then((data) => setBook(data.items));
  }, []);
  return (
    <div show={isOpen} onHide={closeCart} placement="end">
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {FormatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = (bookJson || book).find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
