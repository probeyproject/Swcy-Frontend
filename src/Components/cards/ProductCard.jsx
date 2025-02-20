import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../AuthContext";
import "./ProductCard.css";
import { FaEye, FaHeart } from "react-icons/fa";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const displayedProducts = showMore ? products : products.slice(0, 4);

  const navigate = useNavigate();

  const { isAuthenticated, userData } = useContext(AuthContext);

  console.log(isAuthenticated);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/getAllProduct`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      console.log("User Data Retrieved:", user);
    }
  }, []);

  const parseArray = (data) => {
    try {
      return Array.isArray(data) ? data : JSON.parse(data);
    } catch {
      return [];
    }
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productId]: prev[productId] === size ? null : size,
    }));
  };

  const handleColorSelect = (productId, color) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productId]: prev[productId] === color ? null : color,
    }));
  };

  const handleQuickView = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = async (product) => {
    if (!isAuthenticated || !userData || !userData.user || !userData.user.id) {
      alert("Please login to add items to your cart.");
      navigate("/signin");
      return;
    }

    const {
      product_id,
      product_name,
      product_price,
      discount_price,
      product_description,
    } = product;

    if (!selectedSize[product_id] || !selectedColor[product_id]) {
      alert("Please select both size and color before adding to cart.");
      return;
    }

    const cartData = {
      productId: product_id,
      productName: product_name,
      selected_quantity: 1,
      totalPrice: product_price,
      discount: discount_price,
      selected_color: selectedColor[product_id],
      selected_size: selectedSize[product_id],
      description: product_description,
    };

    try {
      await axios.post(`${baseUrl}/create/cart/${userData.user.id}`, cartData);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="container-fluid mt-3">
      <div>
        <h3 className="text-center py-2"><span className="text-warning">:|</span> Mens Wear <span className="text-warning">|:</span></h3>
        <p><span className="text-warning">|</span> Top Colllection</p>
      </div>
      <div className="d-flex flex-wrap gap-1">
        {displayedProducts.map((data) => {
          const sizes = parseArray(data.product_size);
          const colors = parseArray(data.product_color);
          const images = JSON.parse(data.product_image); // Ensure array format
          return (
            <div
              key={data.product_id}
              className="card ms-2 product-card shadow"
              style={{ width: "24%" }}
            >
              <Link to={`/detailpage/${data.product_id}`} className="image-container">
                <img
                  src={images[0]}
                  className="product-image front-image"
                  alt={data.product_name}
                />
                {images[1] && (
                  <img
                    src={images[1]}
                    className="product-image back-image"
                    alt={data.product_name}
                  />
                )}


              </Link>
              {/* Quick View Icon (Visible on Hover) */}
              <div className="quick-view-icon">
                <FaEye
                  className="icon mb-2"
                  onClick={() => handleQuickView(data)}
                />
                <FaHeart className="icon wishlist-icon" />
              </div>

              <div className="card-body">
                <h5 className="card-title">{data.product_name}</h5>
                <p className="card-text">
                  Price: ₹{data.product_price}{" "}
                  {data.discount_price && (
                    <span className="text-danger text-decoration-line-through ms-2">
                      {data.discount_price}% off
                    </span>
                  )}
                </p>
                <div className="hover-details">
                  <div className="row">
                    {/* <div className="col-md-7"> */}
                    {sizes.length > 0 && (
                      <div className="d-flex mb-2 gap-2 flex-wrap">
                        {/* <span>Size:</span> */}
                        {sizes.map((size, index) => (
                          <button
                            key={index}
                            className={`btn btn-sm ${selectedSize[data.product_id] === size
                              ? "btn-dark"
                              : "btn-outline-dark"
                              }`}
                            style={{ fontSize: "10px" }}
                            onClick={() =>
                              handleSizeSelect(data.product_id, size)
                            }
                          >
                            {size}
                          </button>
                        ))}
                        {selectedSize[data.product_id] && (
                          <span>

                            <span className="badge bg-info  text-uppercase fw-bold">
                              {selectedSize[data.product_id]}
                            </span>
                          </span>
                        )}
                      </div>
                    )}
                    {/* </div> */}
                    {/* <div className="col-md-5"> */}
                    {colors.length > 0 && (
                      <>
                        {/* <p className="card-text">Color:</p> */}
                        <div className="d-flex gap-2 mb-2">
                          {colors.map((color, index) => (
                            <button
                              key={index}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "10%",
                                backgroundColor: color,
                                border:
                                  selectedColor[data.product_id] === color
                                    ? "2px solid black"
                                    : "1px solid gray",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleColorSelect(data.product_id, color)
                              }
                            ></button>
                          ))} 
                          
                             {selectedColor[data.product_id] && (
                            <span>
      
                              <span className="badge bg-info fs-6-5 text-uppercase fw-bold">
                                {selectedColor[data.product_id]}
                              </span>
                            </span>
                          )}


                        </div>
                      </>
                    )}
                   
                    {/* </div> */}
                  </div>


                  <div className="d-flex justify-content-between mt-1">
                    <button
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => handleAddToCart(data)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleQuickView(data)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      {products.length > 4 && (
        <div className="text-end mt-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {currentProduct && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{currentProduct.product_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={JSON.parse(currentProduct.product_image)[0]}
              className="img-fluid mb-3"
              alt={currentProduct.product_name}
            />
            <p>{currentProduct.product_description}</p>
            <p>
              Price: ₹{currentProduct.product_price}{" "}
              {currentProduct.discount_price && (
                <span className="text-danger text-decoration-line-through ms-2">
                  ₹{currentProduct.discount_price}
                </span>
              )}
            </p>

            {parseArray(currentProduct.product_size).length > 0 && (
              <div className="d-flex gap-2 mb-2">
                {parseArray(currentProduct.product_size).map((size, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${selectedSize[currentProduct.product_id] === size
                      ? "btn-dark"
                      : "btn-outline-dark"
                      }`}
                    onClick={() =>
                      handleSizeSelect(currentProduct.product_id, size)
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => handleAddToCart(currentProduct)}
            >
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
