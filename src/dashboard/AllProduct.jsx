import React, { useEffect, useState } from "react";
import Aside from "./sidebar/Aside";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const deleteProduct = (id) => {
    const productId = id;
    axios({
      method: "DELETE",
      url: `http://localhost:9000/products/${productId}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        const updatedProductList = product.filter((p) => p.id !== id);
        setProduct(updatedProductList);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Removed successfully",
        });
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
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
          <div className="col-lg-12 col-md-6 col-sm-12">
            <table className="table s table-striped">
              <thead className="table-light">
                <tr>
                  <td>ID</td>
                  <td>Title</td>
                  <td>Price</td>
                  <td>Category</td>
                  <td>Sasability</td>
                  <td>Publisher</td>
                  <td>author</td>
                  <td>numPages</td>
                  <td>ProductImage</td>
                  <td>desc</td>
                  <td>Opetaions</td>
                </tr>
              </thead>
              <tbody>
                {product.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.salsabilty}</td>
                      <td>{product.publisher}</td>
                      <td>{product.author}</td>
                      <td>{product.numPages}</td>
                      <td>{product.ProductImage.slice(0,20)}</td>
                      <td>{product.desc.slice(0,20)}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                      <td>
                        <Link
                          to={`/accountProfile/UpdateProduct/${product.id}`}
                          className="btn btn-info text-white"
                        >
                          <MdEdit />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
