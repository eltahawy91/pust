import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const [bookJson, setBookJson] = useState([]);
  const [book, setBook] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((response) => response.json())
      .then((data) => setBookJson(data));
  }, []);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`)
      .then((response) => response.json())
      .then((data) => setBook(data.items));
  }, []);

  useEffect(() => {
    if (bookJson.length > 0 && book.length > 0) {
      setAllProducts([...bookJson, ...book]);
    }
  }, [bookJson, book]);
  const item = allProducts.find((i) => i.id === id);
  // console.log(item);
  const { removeFromCart } = useShoppingCart();
  if (item == null) return null;
  return (
    <div className="d-flex align-items-center gap-3 mb-3 position-relative">
      <img
        src={
          item?.ProductImage ||
          item?.volumeInfo?.imageLinks?.thumbnail ||
          "fallback-image-url"
        }
        alt="cart-img"
        style={{ width: "125px", height: "75px" }}
      />

      <div className="me-auto">
        <div>
          {item.title || item.volumeInfo.title}{" "}
          {quantity > 1 && (
            <div className="text-muted" style={{ fontSize: "1rem" }}>
              quantity : {quantity}
            </div>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          Price : {item.price ? FormatCurrency(item.price) : null}
        </div>
      </div>
      <div>{item.price ? FormatCurrency(item.price * quantity) : null}</div>
      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
