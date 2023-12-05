import React from "react";
import "./addfavourite.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useEffect } from "react";
import { useState } from "react";
const AddToFav = ({ id, quantity }) => {
  const { removeFromFav } = useShoppingCart();

  const [bookJson, setBookJson] = useState([]);
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/eltahawy91/pustokapi/Products`)
      .then((response) => response.json())
      .then((data) => setBookJson(data));
  }, []);

  useEffect(() => {
    if (bookJson.length > 0) {
      setBookJson([...bookJson]);
    }
  }, []);

  const itemFav = bookJson.find((i) => i.id);
  // console.log(itemFav.id);
  if (!itemFav) {
    return <h4 className="text-center my-5">No item founded </h4>;
  }

  // if (item === null) return null;
  else
    return (
      <div className="axil-wishlist-area axil-section-gap">
        <div className="container">
          <div className="product-table-heading">
            <h4 className="title">My Wish List on Pustok</h4>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Stock Status </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{itemFav.id}</td>
                <td>
                  <img
                    src={
                      itemFav.ProductImage ||
                      // item?.volumeInfo?.imageLinks?.thumbnail ||
                      "fallback-image-url"
                    }
                    alt="cart-img"
                    style={{ width: "125px", height: "75px" }}
                  />
                </td>
                <td>{itemFav.price}</td>
                <td>In Stock</td>
                <td>
                  <button
                    className="axil-btn btn-bg-primary add-card"
                    // onClick={() =>
                    //   increaseItemQuantity(bookJson.id, bookJson.title)
                    // }
                  >
                    Add to Cart
                  </button>
                  <button
                    className="axil-btn bg-danger border-0 text-white"
                    onClick={() => removeFromFav(bookJson.id)}
                  >
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AddToFav;
