import React from "react";
import "./slider.css";

import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
  {
    url: "https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/800x420/img1.png",
    title: "The Bookworm Editors",
    subTitle: "Featured Books of the",
    month: "January",
    more:"See More",
  },
  {
    url: "	https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png",
    title: "J.D. Kurtness ",
    subTitle: "Cover Up Front Of Books",
    month: "Febriuary",
    more:"See More",
  },
  {
    url: "	https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png",
    title: "H.G. Wells",
    subTitle: "Cover Up Front Of Books and Leave Summary",
    month: "Mars",
    more:"See More",
  },
];

const Slider = () => {
  return (
    <>
      <div className="slide-container">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md6 col-sm-12">
              <Zoom>
                {fadeImages.map((fadeImage, index) => (
                  <div key={index} className="each-slide-effect">
                    <p
                      data-aos="flip-right"
                      className="title-slider text-secondary fs-5 fw-bold text-uppercase"
                    >
                      {fadeImage.title}
                    </p>
                    <h1 data-aos="flip-right" className="fw-lighter text-black text-start">
                      {fadeImage.subTitle}
                    </h1>
                    <h1 data-aos="flip-left" className=" text-black fw-bolder text-start">
                      {fadeImage.month}
                    </h1>
                    <a href="/" className="seeMore bg-dark text-white py-2 px-4" style={{lineHeight:"100px"}}>{fadeImage.more}</a>
                  </div>
                ))}
              </Zoom>
            </div>
            <div className="col-lg-6 col-md6 col-sm-12">
              <Zoom>
                {fadeImages.map((fadeImage, index) => (
                  <div key={index}>
                    <img style={{ width: "100%" }} alt="" src={fadeImage.url} />
                    <h2>{fadeImage.caption}</h2>
                  </div>
                ))}
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
