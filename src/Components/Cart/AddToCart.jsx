import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import { AuthContext } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import { FaPlus, FaMinus, FaHeart, FaHome, FaBuilding } from "react-icons/fa";
import "./CartList.css";
import { Modal, Button, Form } from "react-bootstrap";

const AddToCart = () => {
  const { isAuthenticated, userData } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  // const [newAddress, setNewAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressType, setAddressType] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({
    name: "",
    phone: "",
    address_type: "",
    flat: "",
    floor: "",
    area: "",
    landmark: "",
    state: "",
    postal_code: "",
  });
  // const [addresses, setAddresses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && userData?.user?.id) {
      fetchCartItems();
      fetchUserAddresses();
    }
  }, [isAuthenticated, userData?.user?.id]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/getAllCartByUserId/${userData.user.id}`
      );
      setCartItems(
        response.data.map((item) => ({
          ...item,
          selected_size: item.selected_size || "N/A",
          selected_color: item.selected_color || "N/A",
          total_price: parseFloat(item.total_price).toFixed(2),
        }))
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  const fetchUserAddresses = async () => {
    try {
      if (!userData?.user?.id) {
        console.error("User ID is missing");
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

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleAddOrUpdateAddress = async () => {
    try {
      if (editingAddress) {
        await axios.put(
          `${baseUrl}/updateAddressById/${editingAddress.address_id}`,
          {
            ...currentAddress,
          }
        );
      } else {
        const response = await axios.post(`${baseUrl}/create/address`, {
          user_id: userData.user.id,
          ...currentAddress,
        });
        setAddresses([...addresses, response.data]);
      }
      setShowAddressModal(false);
      setEditingAddress(null);
      setCurrentAddress({
        name: "",
        phone: "",
        address_type: "",
        flat: "",
        floor: "",
        area: "",
        landmark: "",
        state: "",
        postal_code: "",
      });
      fetchUserAddresses();
    } catch (error) {
      console.error("Error adding/updating address:", error);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setCurrentAddress(address);
    setShowAddressModal(true);
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`${baseUrl}/deleteAddressById/${addressId}`);
      setAddresses(
        addresses.filter((address) => address.address_id !== addressId)
      );
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleShowModal = (type, address = {}) => {
    setModalType(type);
    setCurrentAddress(address);
    setShowAddressModal(true);
  };

  const handleUpdateQuantity = async (cartId, productId, newQuantity, item) => {
    if (newQuantity < 1 || newQuantity === item.selected_quantity) return;

    try {
      const updatedTotalPrice =
        parseFloat(item.product_price) * parseInt(newQuantity, 10);
      if (isNaN(updatedTotalPrice)) {
        console.error("Invalid total price calculation");
        return;
      }

      const response = await axios.put(
        `${baseUrl}/cart/${userData.user.id}/${productId}`,
        {
          selected_quantity: newQuantity,
          selected_color: item.selected_color || null,
          selected_size: item.selected_size || null,
          totalPrice: updatedTotalPrice,
          cartStatus: item.cart_status || null,
        }
      );

      if (response.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.cart_id === cartId
              ? {
                  ...cartItem,
                  selected_quantity: newQuantity,
                  total_price: updatedTotalPrice,
                }
              : cartItem
          )
        );
      }
    } catch (error) {
      console.error(
        "Error updating quantity:",
        error.response?.data || error.message
      );
    }
  };

  const handleCheckboxChange = (cartId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(cartId)
        ? prevSelected.filter((id) => id !== cartId)
        : [...prevSelected, cartId]
    );
  };

  const loadRazorpay = async () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(script);
    });
  };

  const createOrder = async (amount) => {
    try {
      const response = await axios.post(`${baseUrl}/createOrderPayment`, {
        amount,
        currency: "INR",
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  const handleCheckout = async (amount) => {
    try {
      const isRazorpayLoaded = await loadRazorpay();
      if (!isRazorpayLoaded) {
        alert("Failed to load Razorpay. Please try again.");
        return;
      }

      const order = await createOrder(amount);
      // console.log("Order_details", order);
      const options = {
        key: "rzp_test_3Nr3bZnvaCtuzz",
        amount: order.amount,
        currency: order.currency,
        name: "Swcy",
        description: "Test Transaction",
        order_id: order.orderId,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post(`${baseUrl}/verifyPayment`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount_paid: order.amount / 100, // Convert back to INR
            });
            // console.log(verifyRes);
            alert(verifyRes.data.message);
          } catch (error) {
            console.error(
              "Payment verification failed:",
              error.response?.data || error.message
            );
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Mohit Kumar",
          email: "mohit@example.com",
          contact: "8957568900",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        alert("Payment failed: " + response.error.description);
      });
    } catch (error) {
      console.error("Payment process failed:", error);
      alert("Payment process failed. Please try again.");
    }
  };

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.selected_quantity,
    0
  );

  const filteredCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.cart_id)
  );

  const subtotal = filteredCartItems
    .reduce((acc, item) => acc + parseFloat(item.total_price), 0)
    .toFixed(2);

  const shippingCost = subtotal > 0 && subtotal < 500 ? 50 : 0;
  const totalCost = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.total_price),
    0
  );
  const selectedItemsCost = (
    parseFloat(subtotal) + parseFloat(shippingCost)
  ).toFixed(2);

  if (loading) return <p>Loading your cart...</p>;

  return (
    <div className="cart-page p-3">
      <h2 className="text-center py-3">Your Shopping Cart</h2>
      <hr />
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty. Let’s go shopping!</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-5">
            {cartItems.map((item) => {
              const images = JSON.parse(item.product_image);
              return (
                <div
                  key={item.cart_id}
                  className="card mb-3 shadow-sm rounded-3 p-3"
                >
                  <div
                    className="d-flex align-items-end"
                    style={{ width: "30px" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.cart_id)}
                      onChange={() => handleCheckboxChange(item.cart_id)}
                      className="me-3"
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to={`/detailpage/${item.product_id}`}
                      className="me-3"
                    >
                      <img
                        src={images[0]}
                        alt={item.product_name}
                        className="cart-item-image rounded-3"
                        style={{
                          width: "80px",
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>

                    <div className="cart-item-details flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-2">
                            {item.product_name}
                            {/* <span>{description}</span> */}
                            <br />
                            <span
                              className="badge bg-secondary text-capitalize me-3"
                              style={{ fontSize: "10px" }}
                            >
                              {item.selected_color}
                            </span>
                            <span
                              className="badge bg-secondary"
                              style={{ fontSize: "10px" }}
                            >
                              {item.selected_size !== "N/A" &&
                                item.selected_size}
                            </span>
                          </h5>
                        </div>

                        <div>
                          {/* Wishlist Button */}
                          <button
                            className="btn btn-sm btn-outline-danger border-0 ms-3"
                            onClick={() => handleAddToWishlist(item)}
                          >
                            <FaHeart />
                          </button>

                          {/* Remove Button */}
                          <button
                            className="btn btn-sm btn-outline-dark border-0 ms-3"
                            onClick={() => handleRemoveFromCart(item.cart_id)}
                          >
                            <MdClose />
                          </button>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        {/* <p className="fs-6  me-5">₹{item.product_price}</p> */}
                        <p className="fw-bold">₹{item.total_price}</p>
                      </div>

                      <div className="d-flex align-items-center mt-2">
                        {/* Quantity Control */}
                        <div className="btn-group border rounded">
                          <button
                            className="btn btn-sm btn-light border-0"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.cart_id,
                                item.product_id,
                                item.selected_quantity - 1,
                                item
                              )
                            }
                          >
                            <FaMinus />
                          </button>
                          <span className="px-3">{item.selected_quantity}</span>
                          <button
                            className="btn btn-sm btn-light border-0"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.cart_id,
                                item.product_id,
                                item.selected_quantity + 1,
                                item
                              )
                            }
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Order Summary</h4>
                    <label htmlFor="coupon">Coupons:</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Coupon"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <button className="btn btn-outline-dark" type="button">
                        Apply
                      </button>
                      <button className="btn btn-outline-dark" type="button">
                        View
                      </button>
                    </div>
                    <div className="mt-3 card p-3 shadow-sm">
                      <p className="d-flex justify-content-between">
                        <strong>Total Items:</strong>
                        <span> {totalItems}</span>
                      </p>
                      <p className="d-flex justify-content-between">
                        <strong>Total Cart Value:</strong> ₹{totalCost}
                      </p>
                      <p className="d-flex justify-content-between">
                        <strong>Reward Points:</strong> --
                      </p>
                      <p className="d-flex justify-content-between">
                        <strong>Subtotal (Selected Items):</strong> ₹{subtotal}
                      </p>
                      <div>
                        <p className="d-flex justify-content-between mb-0">
                          <strong>Shipping Charges:</strong> ₹{shippingCost}
                        </p>
                        <span
                          style={{ fontSize: "14px" }}
                          className="text-muted mb-3"
                        >
                          (Free delivery above ₹499)
                        </span>
                      </div>

                      {/* <p className="text-muted mtt-0">(Free delivery above ₹499)</p> */}
                      <p className="d-flex justify-content-between mt-2">
                        <strong>Final Payable Amount:</strong> ₹
                        {selectedItemsCost}
                      </p>
                    </div>

                    <div className="p-3">
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => {
                          handleCheckout(selectedItemsCost);
                        }}
                        disabled={selectedItems.length === 0}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                  <div className="card p-3 col-md-6">
                    <div>
                      <div className="checkout-title">
                        <h6>Delivery Address</h6>
                      </div>
                      {addresses.map((address) => (
                        <div
                          key={address.address_id}
                          className={`d-flex justify-content-between p-2 card shadow-sm mt-2 ${
                            selectedAddress?.address_id === address.address_id
                              ? "border-primary"
                              : ""
                          }`}
                        >
                          <div className="d-flex align-items-start">
                            <input
                              style={{ width: "15px", height: "15px" }}
                              className="border-0 me-2  "
                              type="radio"
                              name="address"
                              checked={
                                selectedAddress?.address_id ===
                                address.address_id
                              }
                              onChange={() => handleSelectAddress(address)}
                            />
                            {address.address_type === "Home" ? (
                              <FaHome />
                            ) : (
                              <FaBuilding />
                            )}
                          </div>
                          <p className="mt-2 mb-0 ">
                            {address.name}, {address.area}, {address.state} -{" "}
                            {address.postal_code}
                          </p>

                          <div className="mt-0">
                            <MdEdit
                              className="text-primary cursor-pointer mx-2"
                              onClick={() => handleEditAddress(address)}
                            />
                            <MdDelete
                              className="text-danger cursor-pointer"
                              onClick={() =>
                                handleDeleteAddress(address.address_id)
                              }
                            />
                          </div>
                        </div>
                      ))}
                      <Link onClick={() => setShowAddressModal(true)}>
                        <div className="d-flex gap-2 center mt-2">
                          <div>
                            <FaPlus />
                          </div>
                          <div>
                            {editingAddress
                              ? "Edit Address"
                              : "Add new address"}
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Address Modal */}
                    <Modal
                      show={showAddressModal}
                      onHide={() => setShowAddressModal(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          {editingAddress ? "Edit Address" : "Add Address"}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group>
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.area}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  area: e.target.value,
                                })
                              }
                              placeholder="Enter Area"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Address Type</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.address_type}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  address_type: e.target.value,
                                })
                              }
                              placeholder="Enter Address Type"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.name}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  name: e.target.value,
                                })
                              }
                              placeholder="Enter name"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.phone}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  phone: e.target.value,
                                })
                              }
                              placeholder="Enter phone number"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Flat</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.flat}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  flat: e.target.value,
                                })
                              }
                              placeholder="Enter flat number"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Floor</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.floor}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  floor: e.target.value,
                                })
                              }
                              placeholder="Enter floor"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Landmark</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.landmark}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  landmark: e.target.value,
                                })
                              }
                              placeholder="Enter landmark"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.state}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  state: e.target.value,
                                })
                              }
                              placeholder="Enter state"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                              type="text"
                              value={currentAddress.postal_code}
                              onChange={(e) =>
                                setCurrentAddress({
                                  ...currentAddress,
                                  postal_code: e.target.value,
                                })
                              }
                              placeholder="Enter postal code"
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setShowAddressModal(false)}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleAddOrUpdateAddress}
                        >
                          {editingAddress ? "Update" : "Add"}
                        </Button>
                      </Modal.Footer>
                    </Modal>
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

export default AddToCart;
