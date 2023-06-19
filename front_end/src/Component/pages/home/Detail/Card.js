import React from "react";

export default function Card({ id, name, age, country, images}) {
  return (
    <div className="col-sm-4">
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <img src={`images/${images}`} alt=""  width={120} height={240} className="rounded mx-auto d-block object-fit-cover"/>
            <h2>{country}</h2>
            <p>{name}</p>
            <p>{age}</p>
            {/* <a href={'id'} className="btn btn-default add-to-cart">
              <i className="fa fa-shopping-cart" />
              Buy
            </a> */}
          </div>
          <div className="product-overlay">
            <div className="overlay-content">
              <h2>{country}</h2>
              <p>{name}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart" />
                Buy
              </a>
              <a href={`/detail/${id}`} className="btn btn-default add-to-cart">
                Detail
            </a>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
}
