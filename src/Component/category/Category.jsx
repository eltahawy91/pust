import React from "react";
import gallary from "../../Images/category/gallary.png";
import saute from "../../Images/category/saute.png";
import helthcare from "../../Images/category/healthcare.png";
import docs from "../../Images/category/document.png";
import "./category.css";
const category = [
  {
    icon: gallary,
    title: "Arts & Photography",
    shop: "Shop Now",
    bgColor: "#faf1ff",
  },
  {
    icon: saute,
    title: "Food & Drink",
    shop: "Shop Now",
    bgColor: "#faf4eb",
  },

  {
    icon: helthcare,
    title: "Health",
    shop: "Shop Now",
    bgColor: "#e6f2f4",
  },
  {
    icon: docs,
    title: "Biography",
    shop: "Shop Now",
    bgColor: "#fff6f6",
  },
];

const Category = () => {
  return (
    <>
      <div className="container py-5">
        <header className="mb-5 d-md-flex justify-content-between align-items-center">
          <h2 className="font-size-7 mb-3 mb-md-0">Featured Categories</h2>
          <a href="/" className="h-primary d-block">
            All Categories
          </a>
        </header>
        <div className=" my-0 row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-wd-5  justify-content-center">
          {category.map((cat, index) => (
            <div
              key={index}
              className="p-4 col-lg-3 col-md-4  text-center"
              style={{ backgroundColor: cat.bgColor }}
            >
              <figure key={index}>
                <img src={cat.icon} className="logoIcon" alt="" />
              </figure>
              <h6>{cat.title}</h6>
              <span>{cat.shop}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
