import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import "./ProductDetail.css"; // Import external CSS
import ReactImageMagnify from "react-image-magnify";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../AuthContext";
import userimg from "../../assets/Images/pngwing.com.png";
import { Modal, Button } from "react-bootstrap";
import AddressManager from "../Address Manager/AddressManager"; // Adjust path as needed

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity of 1
  const [expandedSections, setExpandedSections] = useState({});
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Use AuthContext
  const { isAuthenticated, userData } = useContext(AuthContext);

  // State to control the AddressManager modal for Buy Now
  const [showAddressManagerModal, setShowAddressManagerModal] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/getProductById/${id}`);
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          const images = JSON.parse(response.data[0]?.product_image || "[]");
          setMainImage(images[0] || "placeholder.jpg");
          setProduct(response.data);
        } else {
          setProduct([]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Fetch user addresses
  useEffect(() => {
    const fetchUserAddresses = async () => {
      try {
        if (!userData?.user?.id) {
          return;
        }
        const response = await axios.get(
          `${baseUrl}/getAddressById/${userData.user.id}`
        );
        setAddresses(response.data);
      } catch (error) {
        console.error(
          "Error fetching addresses:",
          error.response?.data || error.message
        );
      }
    };

    if (isAuthenticated && userData && userData.user) {
      fetchUserAddresses();
    }
  }, [isAuthenticated, userData]);

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
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

    if (!selectedSizes[product_id] || !selectedColors[product_id]) {
      alert("Please select both size and color before adding to cart.");
      return;
    }

    const cartData = {
      productId: product_id,
      productName: product_name,
      selected_quantity: 1,
      totalPrice: product_price,
      discount: discount_price,
      selected_color: selectedColors[product_id],
      selected_size: selectedSizes[product_id],
      description: product_description,
    };

    try {
      await axios.post(
        `${baseUrl}/create/cart/${userData.user.id}`,
        cartData
      );
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleCreateOrder = async (product) => {
    if (!isAuthenticated || !userData || !userData.user || !userData.user.id) {
      alert("Please login to create an order.");
      navigate("/signin");
      return;
    }

    const { product_id, product_name, product_price } = product;

    if (!selectedSizes[product_id] || !selectedColors[product_id]) {
      alert("Please select both size and color before creating an order.");
      return;
    }

    if (!selectedAddress) {
      alert("Please select a delivery address.");
      return;
    }

    const orderData = {
      products: [{ id: product_id, productName: product_name, unit: selectedQuantity }],
      totalPrice: product_price * selectedQuantity,
      cupon: null,
      orderStatus: "Pending",
      payment: "Pending",
      quantity: selectedQuantity,
      userId: userData.user.id,
      deliveryDate: new Date().toISOString(),
      deliveryTimeSlot: "9AM-12PM",
      address_id: selectedAddress, // Use the selected address ID
      payment_mode: "Cash on Delivery",
      pointsUsed: 0,
      gst_cost: 0,
      gst_percentage: 0,
      shipping_cost: 0,
    };

    console.log("Order Data:", orderData);

    try {
      const response = await axios.post(
        `${baseUrl}/create/order/${userData.user.id}`,
        orderData
      );
      console.log("Response:", response);
      if (response.data && response.data.orderId) {
        alert("Order created successfully!");
      } else {
        alert("Failed to create order.");
      }
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred while creating the order. Please try again.");
    }
  };

  // Opens the AddressManager modal when user clicks "Buy Now"
  const handleBuyNow = () => {
    if (!isAuthenticated || !userData || !userData.user || !userData.user.id) {
      alert("Please login to proceed with your order.");
      navigate("/signin");
      return;
    }
    // Pass the required order details via state to the checkout page.
    navigate("/checkout", {
      state: {
        product: product[0],
        selectedSize: selectedSizes[product[0].product_id],
        selectedColor: selectedColors[product[0].product_id],
        selectedQuantity,
      },
    });
  };
  

  if (loading) return <div className="text-center">Loading...</div>;

  if (product.length === 0) {
    return <div className="text-center">Product not found.</div>;
  }


  return (
    <div className="container rounded bg-light mt-3 p-3">
      {product.map((data, index) => (
        <div key={index} className="row">
          {/* Left Section: Product Images */}
          <div className="col-md-6 d-flex">
            <div className="thumbnail-container">
              {JSON.parse(data.product_image || "[]").map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  style={{ height: "15%" }}
                  alt={`Thumbnail ${idx + 1}`}
                  className="img-thumbnail thumbnail"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
            <div className="magnify-container">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Main Product",
                    isFluidWidth: true,
                    src: mainImage,
                  },
                  largeImage: {
                    src: mainImage,
                    width: 1000,
                    height: 1000,
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                  isHintEnabled: true,
                  shouldUsePositiveSpaceLens: false,
                }}
              />
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="col-12 col-md-6">
            <p className="text-muted mb-2">{data.product_name}</p>
            <h5 className="fw-bold">{data.product_name}</h5>
            <p className="text-muted fs-6">{data.store_info}</p>
            <div className="d-flex align-items-center mb-3">
              <h3 className="text-success me-3">₹{data.product_price}</h3>
              <span className="text-danger text-decoration-line-through me-2">
                {data.discount_price}%
              </span>
              <span className="badge bg-success">
                {((1 - data.discount_price / data.product_price) * 100).toFixed(
                  2
                )}
                %
              </span>
            </div>

            {/* Color Section */}
            <div className="mb-3">
              <h6>Select Color:</h6>
              <div className="d-flex flex-wrap">
                {JSON.parse(data.product_color || "[]").map((product_color, idx) => (
                  <div
                    key={idx}
                    className={`color-box me-2 ${selectedColors[data.product_id] === product_color ? "selected" : ""}`}
                    style={{
                      backgroundColor: product_color,
                      width: "30px",
                      height: "30px",
                      borderRadius: "20%",
                      border: "2px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorSelect(data.product_id, product_color)}
                  />
                ))}
              </div>
              <p className="text-muted mt-1">
                Selected Color:{" "}
                <strong className="text-uppercase">
                  {selectedColors[data.product_id] || "None"}
                </strong>
              </p>
            </div>

            {/* Size Section */}
            <div className="mb-3">
              <h6>Select Size:</h6>
              <div className="d-flex flex-wrap">
                {JSON.parse(data.product_size || "[]").map((product_size, idx) => (
                  <button
                    key={idx}
                    className={`btn btn-outline-dark me-2 mb-2 ${selectedSizes[data.product_id] === product_size ? "active" : ""}`}
                    onClick={() => handleSizeSelect(data.product_id, product_size)}
                  >
                    {product_size}
                  </button>
                ))}
              </div>
              <p className="text-muted mt-1">
                Selected Size: <strong>{selectedSizes[data.product_id] || "None"}</strong>
              </p>
            </div>

            {/* Quantity Section */}
            <div className="mb-3">
              <h6>Select Quantity:</h6>
              <input
                type="number"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                min="1"
                className="form-control"
              />
            </div>

            {/* Existing Address Selection (Optional) */}
            <div className="mb-3">
              {/* <h6>Selected Address:</h6> */}
              <p className="text-muted mt-1">
                <strong>
                  {selectedAddress
                    ? addresses.find(addr => addr.address_id === selectedAddress)?.address_line_1
                    : "None"}
                </strong>
              </p>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-3">
              <button
                className="btn btn-dark fw-bold"
                // disabled={!selectedColor || !selectedSize}
                onClick={() => handleAddToCart(data)}
              >
                🛒 ADD TO BAG
              </button>
              <button className="btn btn-success" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button className="btn btn-outline-secondary fw-bold"
                onClick={() => addToWishlist(data)}
              >
                <FaHeart />
              </button>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="mb-3 border-bottom pb-2 mt-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection(data.id, "description")}
            >
              <h6 className="fw-bold mb-0">Product Description</h6>
              <span className="fw-bold fs-4">
                {expandedSections[data.id]?.description ? "-" : "+"}
              </span>
            </div>
            {expandedSections[data.id]?.description && (
              <p className="mt-2 text-muted">{data.product_description}</p>
            )}
          </div>

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
                Refundable:{" "}
                <strong>{data.refundable === 1 ? "Yes" : "No"}</strong>
                <br />
                Exchangeable:{" "}
                <strong>{data.exchangeable === 1 ? "Yes" : "No"}</strong>
              </p>
            )}
          </div>
          {/* Reviews Section */}
          <div className="pt-4">
            <div className="row mb-3">
              <div className="col-md-6">
                <h5 className="fw-bold">Product Reviews </h5>
                <p className="small text-muted">
                  ⭐ 98% of verified buyers recommend this product
                </p>
                <div className="card" style={{ height: "100px" }}>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-1">
                        <img
                          className="p-2"
                          src={userimg}
                          style={{ height: "50px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-11">
                        <div className="d-flex justify-content-between">
                          <h4 className="mt-3 ms-3 me-3 fs-6">User1</h4>
                          <span
                            className="text-muted p-3"
                            style={{ fontSize: "10px" }}
                          >
                            2 Day ago
                          </span>
                        </div>
                        <p className="text-muted ms-2">
                          "The Swcy Products are good, i definately recommend
                          you to try once."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3" style={{ height: "100px" }}>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-1">
                        <img
                          className="p-2"
                          src={userimg}
                          style={{ height: "50px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-11">
                        <div className="d-flex justify-content-between">
                          <h4 className="mt-3 ms-3 me-3 fs-6">User2 </h4>
                          <span
                            className="text-muted p-3"
                            style={{ fontSize: "10px" }}
                          >
                            2 Hour ago
                          </span>
                        </div>
                        <p className="text-muted ms-2">
                          "The Swcy Products are good, i definately recommend
                          you to try once."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <h4>Want to review.</h4>
                <form className="form-control" action="submit">
                  <label htmlFor="review">Write Here</label>
                  <input
                    className="form-control"
                    placeholder="Write review..."
                    type="text"
                  />
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-dark d-flex  mt-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal for Address Management on Buy Now */}
      <Modal
        show={showAddressManagerModal}
        onHide={() => setShowAddressManagerModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Delivery Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render AddressManager and pass onSelectAddress and selectedAddress props */}
          <AddressManager
            userId={userData.user.id}
            onSelectAddress={(addressId) => setSelectedAddress(addressId)}
            selectedAddress={selectedAddress}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddressManagerModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (!selectedAddress) {
                alert("Please select a delivery address.");
                return;
              }
              // Create order for the current product (assuming product[0] is being purchased)
              handleCreateOrder(product[0]);
              setShowAddressManagerModal(false);
            }}
          >
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetail;
