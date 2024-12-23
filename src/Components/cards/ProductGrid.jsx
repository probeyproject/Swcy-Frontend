import React, { useState } from 'react';
import './productgrid.css';
import { FaHeart, FaShare, FaStar, FaCartPlus, FaEye } from "react-icons/fa";
import Product from "./../AllProducts/Product";

function ProductGrid() {
  const [product, setProduct] = useState(Product);

  return (
    <div><p className="fs-4">
    <span className="text-warning ms-5">| </span>Top Collections!
  </p>
  <h3 className="py-3 text-center fs-1">Best Sellers</h3>
      <h4 className="text-center fw-bold my-4">T-shirts</h4>
      <div className="container">
        <div className="row">
          {product?.map((item, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div className="product-card">
                  <div className='product_bestdeals'>
                    <div className='product_deals products_one'>{item.offers}</div>
                    <div className='product_ratings products_one'>
                      5 <FaStar />
                    </div>
                  </div>
                  <div className='product_button'>
                    <button className='buttons_one product_view'>
                      <FaEye /><span>Quick View</span>
                    </button>
                    <button className='buttons_one product_cart'>
                      <FaCartPlus /><span>Add To Cart</span>
                    </button>
                  </div>
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-price">${item.price}</p>
                  </div>
                  <div className="hover-icons">
                    <i className="icon heart-icon"><FaHeart /></i>
                    <i className="icon share-icon"><FaShare /></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
