import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function ProductDetail() {
    const productImages = [
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1720094650-1.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1694763957-2.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1694763962-3.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1694763973-5.jpg",
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1703840043-10.jpeg",
        "https://images.bewakoof.com/t1080/men-s-black-the-panda-way-graphic-printed-oversized-t-shirt-580633-1694763978-6.jpg",
      ];
    
      const [mainImage, setMainImage] = useState(productImages[0]);
      const [showDescription, setShowDescription] = useState(false);
      const [showReturnPolicy, setShowReturnPolicy] = useState(false);
    

  return (
    <div className="container mt-5">
      <div className="row ms-4">
        {/* Left Section: Product Images */}
        <div className="col-md-6 d-flex">
          <div className="me-3 d-flex flex-column">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="img-thumbnail mb-2"
                style={{ cursor: "pointer", width: "60px", height: "60px" }}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          <div>
            <img
              src={mainImage}
              alt="Main Product"
              className="img-fluid border"
              style={{ maxHeight: "400px", maxWidth: "400px" }}
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="col-md-6">
          <h4 className="fw-bold d-flex justify-content-start">SWCY® Clothing </h4>
          <p className="text-muted d-flex justify-content-start">All combo list and product</p>

          <div className="d-flex align-items-center mb-3">
            <h3 className="text-success me-3">₹149</h3>
            <span className="text-muted text-decoration-line-through me-2">
              ₹499
            </span>
            <span className="badge bg-success">70% OFF</span>
          </div>

          {/* Buttons */}
          <div className="mb-3 d-flex justify-content-start">
            <button className="btn btn-primary btn-sm fw-bold me-3">
              🛒 ADD TO BAG
            </button>
            <button className="btn btn-outline-secondary btn-sm fw-bold">
              ♡ WISHLIST
            </button>
          </div>

          {/* Toggleable Product Description */}
          <div className="mb-3 border-bottom pb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setShowDescription(!showDescription)}
            >
              <h6 className="fw-bold mb-0">Product Description</h6>
              <span className="fw-bold fs-4">
                {showDescription ? "-" : "+"}
              </span>
            </div>
            {showDescription && (
              <p className="mt-2 text-muted ">
                This is a high-quality product made with premium materials. It
                ensures comfort, durability, and a perfect fit for daily wear.
              </p>
            )}
          </div>

          {/* Toggleable Return Policy */}
          <div className="mb-3 border-bottom pb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setShowReturnPolicy(!showReturnPolicy)}
            >
              <h6 className="fw-bold mb-0">Return Policy</h6>
              <span className="fw-bold fs-4">
                {showReturnPolicy ? "-" : "+"}
              </span>
            </div>
            {showReturnPolicy && (
              <p className="mt-2 text-muted">
                This product is not eligible for returns. Please read the
                product details carefully before purchasing.
              </p>
            )}
          </div>

          {/* Delivery Section */}
          <div className="mb-4">
            <h6>📍 Check for Delivery Details</h6>
            <div className="input-group mb-2">
           
            </div>
            <p className="text-info">🚚 FREE SHIPPING on all orders above ₹399</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5 border-top pt-4">
        <h5 className="fw-bold">Product Reviews</h5>
        <p className="small text-muted">
          ⭐ 98% of verified buyers recommend this product
        </p>
      </div>
      <div className="mt-5 border-top pt-2">
        <h5 className="fw-bold">Related Products</h5>
       
      </div>
    </div>
  )
}

export default ProductDetail