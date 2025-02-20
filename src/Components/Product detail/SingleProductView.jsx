import React, { useState } from "react";

const SingleProductView = () => {
  // Static product data
  const staticProduct = {
    id: 1,
    title: "Men's Jacket",
    price: 1999,
    quantity: 1,
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    colors: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
    images: [
      "https://via.placeholder.com/150", // Placeholder image URLs
      "https://via.placeholder.com/150/0000FF",
      "https://via.placeholder.com/150/008000",
    ],
  };

  const [currentProduct, setCurrentProduct] = useState(staticProduct);
  const [selectedImage, setSelectedImage] = useState(staticProduct.images[0]);
  const [selectedSize, setSelectedSize] = useState(staticProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(staticProduct.colors[0]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {/* Product Card */}
      <div className="card" style={{ width: "18rem" }} onClick={openModal}>
        <img
          src={currentProduct.images[0]}
          className="card-img-top"
          alt={currentProduct.title}
        />
        <div className="card-body">
          <h5 className="card-title">{currentProduct.title}</h5>
          <p className="card-text">Price: ₹{currentProduct.price}</p>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
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
                                selectedImage === img ? "2px solid blue" : "none",
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
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details Section */}
                  <div className="col-md-6">
                    <h5>{currentProduct.title}</h5>
                    <p className="text-success fs-4">₹{currentProduct.price}</p>

                    <div className="mt-2 mb-2">
                      <span>Quantity:</span>
                      <input
                        type="number"
                        className="form-control"
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

                    <div className="mt-3">
                      <strong>Sizes:</strong>
                      <div className="d-flex mt-2">
                        <select
                          className="form-select"
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                        >
                          {currentProduct.sizes.map((size, index) => (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-3">
                      <strong>Colors:</strong>
                      <div className="d-flex mt-2">
                        {currentProduct.colors.map((color, index) => (
                          <button
                            key={index}
                            className={`btn me-2 btn-outline-primary ${
                              selectedColor === color ? "active" : ""
                            }`}
                            style={{
                              backgroundColor: color.toLowerCase(),
                              height: "25px",
                              borderRadius: "50%",
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
};

export default SingleProductView;
