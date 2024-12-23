import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Wishlist/Wishlist.css";
import { SlFrame } from "react-icons/sl";
import { FaTrash } from "react-icons/fa";

function ProductCard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Flora Mehandi",
      description:
        "Premium Card with intricate designs and customizable options.",
      price: 480,
      originalPrice: 500,
      discount: 4,
      views: 90,
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue", "Green"],
      quantity: 1,
      images: [
        "https://teerov.com/wp-content/uploads/2024/11/2-1024x1024.png",
        "https://teerov.com/wp-content/uploads/2024/12/t-shirt-mockup-on-hanger-against-flowy-curtains-0467-2024-11-25T114629.025-420x504.png",
        "https://teerov.com/wp-content/uploads/2024/12/t-shirt-mockup-on-hanger-against-flowy-curtains-0467-2024-11-25T130122.916-420x504.png",
      ],
    },

    {
      id: 2,
      title: "Flora Mehandi",
      description:
        "Premium Card with intricate designs and customizable options.",
      price: 480,
      originalPrice: 500,
      discount: 4,
      views: 90,
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue", "Green"],
      quantity: 1,
      images: [
        "https://teerov.com/wp-content/uploads/2024/11/2-1024x1024.png",
        "https://teerov.com/wp-content/uploads/2024/11/4-1024x1024.png",
        "https://teerov.com/wp-content/uploads/2024/12/Squid-Game-420x504.png",
      ],
    },

    {
        id: 3,
        title: "Flora Mehandi",
        description:
          "Premium Card with intricate designs and customizable options.",
        price: 480,
        originalPrice: 500,
        discount: 4,
        views: 90,
        sizes: ["S", "M", "L"],
        colors: ["Red", "Blue", "Green"],
        quantity: 1,
        images: [
          "https://teerov.com/wp-content/uploads/2024/11/2-1024x1024.png",
          "https://teerov.com/wp-content/uploads/2024/11/4-1024x1024.png",
          "https://teerov.com/wp-content/uploads/2024/12/Squid-Game-420x504.png",
        ],
      },

      {
        id: 4,
        title: "Flora Mehandi",
        description:
          "Premium Card with intricate designs and customizable options.",
        price: 480,
        originalPrice: 500,
        discount: 4,
        views: 90,
        sizes: ["S", "M", "L"],
        colors: ["Red", "Blue", "Green"],
        quantity: 1,
        images: [
          "https://teerov.com/wp-content/uploads/2024/11/2-1024x1024.png",
          "https://teerov.com/wp-content/uploads/2024/11/4-1024x1024.png",
          "https://teerov.com/wp-content/uploads/2024/12/Squid-Game-420x504.png",
        ],
      },
  ]);

  // Function to remove an item
  const handleRemoveProducts = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const openQuickView = (product) => {
    setCurrentProduct(product);
    setSelectedImage(product.images[0]); // Default to the first image
    setSelectedColor(product.colors[0]); // Default to the first color
    setSelectedSize(product.sizes[0]); // Default to the first size
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
    setSelectedImage("");
    setSelectedColor("");
    setSelectedSize("");
  };

  return (
    <div className="container mt-3">
        <p className="fs-4"><span className="text-warning">| </span>New Arrival</p>
      <h3 className="text-center fs-2">Featured Product!</h3>
      <div className="row mt-3">
        {products.map((product) => (
          <div className="col-md-3 " key={product.id}>
            <div
              className="card position-relative mt-4"
              style={{
                overflow: "hidden",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              {/* Product Image */}
              <div
                className="card-image-wrapper position-relative"
                style={{
                  overflow: "hidden",
                  height: "100%",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className=" myDIV card-img-top"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />

                {/* Views and Ratings */}
                <div
                  className=" position-absolute top-0 w-100 d-flex justify-content-between p-2"
                  style={{ zIndex: 7 }}
                >
                  <button
                    className="badge btn bg-light"
                    style={{ color: "black", fontWeight: "700" }}
                    onClick={() => openQuickView(product)}
                  >
                    <SlFrame />
                  </button>

                  {/* <span className="badge bg-dark">
                    ⭐ {product.rating.toFixed(1)}
                  </span> */}
                </div>

                {/* Hover Buttons */}
                <div
                  className=" hide position-absolute d-flex justify-content-center align-items-center w-100 h-100"
                  style={{
                    top: "100px",
                    left: "0",
                    height: "100%",
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <button
                    className="btn btn-danger btn-sm me-1 mb-2"
                    onClick={() => handleRemoveProducts(product.id)}
                  >
                    <span>Remove </span>
                    <FaTrash />
                  </button>
                  <button
                    className="btn btn-light btn-sm ms-5"
                    onClick={() => alert("Added to Cart!")}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body text-center">
                <h6 className="card-title bg-darkblue fs-4">{product.title}</h6>
                {/* <p className="text-muted fs-6">{product.description}</p> */}
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="text-success me-2">Price: ₹{product.price}</h5>
                  {product.discount > 0 && (
                    <>
                      <span className="text-danger text-decoration-line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="badge bg-success ms-2">
                        {product.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && currentProduct && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{currentProduct.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {/* Left Column: Image Section */}
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-2">
                        {currentProduct.images.map((img, index) => (
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
                            height: "250px",
                            width: "300px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="row d-flex justify-content-center mt-3 mb-3">
                          <div className="col-md-6">
                            <button className="btn bg-success border-0">
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

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>{currentProduct.title}</h5>
                            <p className="text-success">
                              ₹{currentProduct.price}
                            </p>
                            {/* <p className="">
                              <FaStar />
                              {currentProduct.rating.toFixed(1)}
                            </p> */}
                            <div className=" mt-2 mb-2">
                              <span>Quantity:</span>
                              <input
                                type="number"
                                className="form-control "
                                value={currentProduct.quantity}
                                style={{ width: "80px", height: "30px" }}
                                onChange={(e) =>
                                  setCurrentProduct({
                                    ...currentProduct,
                                    quantity: parseInt(e.target.value) || 1,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div>
                          <strong className="ms-5">Sizes:</strong>
                          <div className="ms-5 d-flex mt-2">
                            {currentProduct.sizes.map((size, index) => (
                              <button
                                key={index}
                                className={`btn btn-sm btn-outline-primary me-2 ${
                                  selectedSize === size ? "active" : ""
                                }`}
                                style={{
                                  borderRadius: "50%",
                                  // width: "25px",
                                  height: "25px",
                                  alignItems: "center",
                                }}
                                onClick={() => setSelectedSize(size)}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="ms-5 mt-3">
                          <strong>Colors:</strong>
                          <div className=" d-flex mt-2">
                            {currentProduct.colors.map((color, index) => (
                              <button
                                key={index}
                                className={`btn me-2 btn-outline-primary ${
                                  selectedColor === color ? "active" : ""
                                }`}
                                style={{
                                  backgroundColor: color.toLowerCase(),
                                  // width: "25px",
                                  height: "25px",
                                  borderRadius: "50%",
                                  alignItems: "center",
                                  borderBottom:
                                    selectedColor === color
                                      ? "0px solid black"
                                      : "1px solid gray",
                                }}
                                onClick={() => setSelectedColor(color)}
                              ></button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="row d-flex justify-content-center mt-3 mb-3">
                        <div className="col-md-6">
                          <button className="btn bg-success border-0">
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
        </div>
      )}
    </div>
  );
}

export default ProductCard;
