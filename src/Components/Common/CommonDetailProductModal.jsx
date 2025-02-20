import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CommonDetailProductModal = ({ product, onClose }) => {
  if (!product) return null;
  const [selectedImage, setSelectedImage] = useState(
    product.imageSrc && product.imageSrc.length > 0 ? product.imageSrc[0] : ""
  );
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    try {
      // Parse size if it's a JSON string, otherwise use it as-is
      const parsedSizes = Array.isArray(product.size)
        ? product.size
        : JSON.parse(product.size);
      setSizes(parsedSizes);
      // If the
      setSelectedSize(parsedSizes.length > 0 ? parsedSizes[0] : "");
      // If the size array is empty, select the first one as default
    } catch (error) {
      console.error("Error parsing size:", error);
      setSizes([]);
      setSelectedSize("");
    }
  }, [product.size]);

  useEffect(() => {
    try {
      // Parse size if it's a JSON string, otherwise use it as-is
      const parsedSizes = Array.isArray(product.size)
        ? product.size
        : JSON.parse(product.size);
      setSizes(parsedSizes);
      // If the
      setSelectedSize(parsedSizes.length > 0 ? parsedSizes[0] : "");
      // If the size array is empty, select the first one as default
    } catch (error) {
      console.error("Error parsing size:", error);
      setSizes([]);
      setSelectedSize("");
    }
  }, [product.size]);

  // Handle size change within the component
  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };
  return (
    <div
      className="modal d-block border-5"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-2">
                    {product.imageSrc.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="img-thumbnail mb-3"
                        style={{
                          cursor: "pointer",

                          border:
                            selectedImage === img ? "1px solid gray" : "none",
                        }}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                  <div className="col-10">
                    <img
                      src={selectedImage}
                      alt="Main view"
                      className="img-fluid pb-2"
                      style={{
                        height: "100%",
                        width: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container mt-2">
                  <h6 className="mb-3 text-uppercase">{product.productName}</h6>
                  <h5 className="text-muted">&#8377;5,500.00</h5>
                  <hr />
                  <div className="mt-4">
                    <h6 className="text-muted">Color:</h6>
                    <button
                      className="btn border text-dark active rounded-0 ms-1"
                      disabled
                    >
                      Brown
                    </button>
                    <button
                      className="btn border text-dark active rounded-0 ms-1"
                      disabled
                    >
                      Red
                    </button>
                  </div>

                  <div className="mt-4">
                    <h6 className="text-muted">Size:</h6>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Size options"
                    >
                      {sizes.map((sz, index) => (
                        <button
                          key={index}
                          className={`btn border text-dark rounded-0 ms-1 ${
                            sz === selectedSize ? "active" : ""
                          }`}
                          onClick={() => handleSizeChange(sz)}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button className="btn border text-secondary btn-lg me-2 rounded-0 ms-1">
                      Add to Cart
                    </button>
                    <button className="btn border bg-warning text-dark  btn-lg rounded-0 ms-1">
                      Buy It Now
                    </button>
                  </div>
                  <hr />
                  <Link to="/" className="text-decoration-none text-dark">
                    <span>More Details</span> <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonDetailProductModal;
