import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import Product from "../AllProducts/Product";
import "./Productgrid.css";

function ProductList() {
  const [product, setProduct] = useState(Product);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(product.size);
  const [selectedImage, setSelectedImage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/filter", { state: { selectedProduct: item } });
  };

  const handleViewMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  const handleQuickView = (item) => {
    setSelectedProduct(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (    
    <div className="container-fluid mt-3 bg-light">
      <div className="fs-4">
        <p className="mt-3">
          <span className="text-warning ms-5">| </span>Top Collections!
        </p>
      </div>
      <h3 className="py-1 text-center fs-1">Featured Top Seller</h3>
      <div className="container">
        <div className="row">
          {product.slice(0, visibleProducts).map((item, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="product-card bg-light rounded border-0 shadow-lg">
                <div className="product_bestdeals">
                  <div className="rounded product_deals products_one">
                    {item.offers}
                  </div>
                </div>
                <div className="product_button">
                  <button
                    className="btn btn-lg buttons_one product_view"
                    onClick={() => handleQuickView(item)}
                  >
                    <FaEye className="icon_btn" />
                    <span
                      className="button_text_p"
                      style={{ fontSize: "13px" }}
                    >
                      Quick View
                    </span>
                  </button>
                  <button
                    className="btn btn-lg buttons_one rounded product_cart"
                    onClick={() => handleBuyNow(item)}
                  >
                    <MdOutlineAddShoppingCart className="icon_btn" />
                    <span
                      className="button_text_p"
                      style={{ fontSize: "13px" }}
                    >
                      Buy Now
                    </span>
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image rounded"
                />
                <div className="product-details">
                  <h3 className="product-name text_name_size">{item.name}</h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <h5 className="text-black me-2 text_price_size">
                      ₹{item.price}
                    </h5>
                    {item.discount > 0 && (
                      <>
                        <span className="text-danger text_original_size text-decoration-line-through">
                          ₹{item.originalPrice}
                        </span>
                        <span className="badge bg-dark text_disc_size ms-2">
                          {item.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="hover-icons">
                  <i className="icon heart-icon">
                    <FaHeart />
                  </i>
                  <i className="icon share-icon">
                    <PiHandbagSimpleBold />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProducts < product.length && (
          <div className="text-end">
            <button className="btn btn-dark mb-3" onClick={handleViewMore}>
              ↪ View More
            </button>
          </div>
        )}
      </div>

      {showModal && selectedProduct && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-2">
                        {selectedProduct.image.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="img-thumbnail mb-2"
                            style={{
                              cursor: "pointer",

                              border:
                                selectedImage === img
                                  ? "2px solid blue"
                                  : "none",
                            }}
                            onClick={() => setSelectedImage(img)}
                          />
                        ))}
                      </div>
                      <div className="col-10">
                        <img
                          src={selectedImage}
                          alt="Main view"
                          className="img-fluid"
                          style={{
                            height: "100%",
                            width: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details Section */}
                  <div className="col-md-6">
                    <h5 className="mb-3">{selectedProduct.name}</h5>
                    <div className="d-flex justify-content-start align-items-center">
                      <h5 className="text-black me-2 text_price_size">
                        ₹{selectedProduct.price}
                      </h5>
                      {selectedProduct.discount > 0 && (
                        <>
                          <span className="text-danger text_original_size text-decoration-line-through">
                            ₹{selectedProduct.originalPrice}
                          </span>
                          <span className="badge bg-dark text_disc_size ms-2">
                            {selectedProduct.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <hr />
                    <p>
                      <strong>Description:</strong>{" "}
                      {selectedProduct.description ||
                        "No description available."}
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mt-3">
                          <strong>Sizes:</strong>
                          <div
                            className="d-flex mt-2"
                            style={{ width: "110px" }}
                          >
                            <select
                              className="form-select"
                              value={selectedSize}
                              onChange={(e) => setSelectedSize(e.target.value)}
                            >
                              {selectedProduct.size.map((size, index) => (
                                <option key={index} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mt-3">
                          <strong>Available Colors:</strong>
                          <div className="d-flex mt-2">
                            {(selectedProduct.colors || []).map(
                              (color, index) => (
                                <div
                                  key={index}
                                  className="me-2"
                                  style={{
                                    backgroundColor: color.toLowerCase(),
                                    height: "25px",
                                    width: "25px",
                                    borderRadius: "50%",
                                    border: "1px solid gray",
                                  }}
                                ></div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center mt-3 mb-3">
                      <div className="col-md-6">
                        <button className="btn bg-black text-white border-0">
                          Shop now
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn bg-light border-0">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
