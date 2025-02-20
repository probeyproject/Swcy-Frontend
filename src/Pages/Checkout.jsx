import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../API/Api";
import { AuthContext } from "../AuthContext";
import AddressManager from "../Components/Address Manager/AddressManager"; // Adjust the import path as needed

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userData, isAuthenticated } = useContext(AuthContext);

  // Extract order details passed from ProductDetail
  const { product, selectedSize, selectedColor, selectedQuantity } = state || {};
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery");
  const [coupon, setCoupon] = useState("");
  const [orderSummary, setOrderSummary] = useState({
    productPrice: product ? product.product_price * selectedQuantity : 0,
    shippingCharges: 50, // Example shipping charge
    couponDiscount: 0,
    total: 0,
  });

  // Update order total based on summary values
  useEffect(() => {
    const total =
      orderSummary.productPrice +
      orderSummary.shippingCharges -
      orderSummary.couponDiscount;
    setOrderSummary((prev) => ({ ...prev, total }));
  }, [orderSummary.productPrice, orderSummary.shippingCharges, orderSummary.couponDiscount]);

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Please select a delivery address.");
      return;
    }

    const orderData = {
      products: [
        { id: product.product_id, productName: product.product_name, unit: selectedQuantity },
      ],
      totalPrice: orderSummary.total,
      cupon: coupon,
      orderStatus: "Pending",
      payment: paymentMode,
      quantity: selectedQuantity,
      userId: userData.user.id,
      deliveryDate: new Date().toISOString(),
      deliveryTimeSlot: "9AM-12PM",
      address_id: selectedAddress,
      payment_mode: paymentMode,
      pointsUsed: 0,
      gst_cost: 0,
      gst_percentage: 0,
      shipping_cost: orderSummary.shippingCharges,
    };

    try {
      const response = await axios.post(`${baseUrl}/create/order/${userData.user.id}`, orderData);
      if (response.data && response.data.orderId) {
        alert("Order placed successfully!");
        navigate("/order-success", { state: { orderId: response.data.orderId } });
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error.message);
      alert("An error occurred while placing your order. Please try again.");
    }
  };

  // Helper function to get the product image
  const getProductImage = () => {
    if (product && product.product_image) {
      // Check if the image string appears to be JSON (i.e. starts with "[")
      if (product.product_image.trim().startsWith("[")) {
        try {
          const images = JSON.parse(product.product_image);
          if (images && images.length > 0) {
            return images[0];
          }
        } catch (err) {
          return product.product_image;
        }
      } else {
        return product.product_image;
      }
    }
    return "";
  };

  if (!product) {
    return <div>Order details not available.</div>;
  }

  return (
    <Container className="my-4">
      <h2 className="text-center">Checkout</h2>
      <Row>
        {/* Left Column: Order Summary & Payment Options */}
        <Col xs={12} md={6}>
          <Card className="mb-3">
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
              <p className="d-flex justify-content-between">
                <strong>Product:</strong> {product.product_name}
              </p>
              <p className="d-flex justify-content-between">
                <strong>Price:</strong> ₹{product.product_price} x {selectedQuantity}
              </p>
              <p className="d-flex justify-content-between">
                <strong>Subtotal:</strong> ₹{orderSummary.productPrice}
              </p>
              <p className="d-flex justify-content-between">
                <strong>Shipping Charges:</strong> ₹{orderSummary.shippingCharges}
              </p>
              <Form.Group className="mb-3">
                <Form.Label>Coupon Code</Form.Label>
                {/* <Form.Control
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                /> */}
                <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={coupon}
                        placeholder="Enter Coupon"
                        onChange={(e) => setCoupon(e.target.value)}
                        aria-describedby="basic-addon2"
                      />
                      <button className="btn btn-outline-dark" type="button">
                        Apply
                      </button>
                      <button className="btn btn-outline-dark" type="button">
                        View
                      </button>
                    </div>
              </Form.Group>
              <p>
                <strong>Total:</strong> ₹{orderSummary.total}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Product Details</Card.Header>
            <Card.Body>
              <Row>
                <Col xs={4}>
                <Link to={`/detailpage/${product.product_id}`}>
                <img
                    src={getProductImage()}
                    alt={product.product_name}
                    className="img-fluid rounded"
                  />
                </Link>
                  
                </Col>
                <Col xs={8}>
                  <p>
                    <strong>Name:</strong> {product.product_name}
                  </p>
                  <p>
                    <strong>Description:</strong> {product.product_description}
                  </p>
                  <p>
                    Selected Size: <strong>{selectedSize}</strong>&nbsp;
                    Selected Color: <strong className="text-capitalize">{selectedColor}</strong>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          
        </Col>
        {/* Right Column: Address Selection & Product Info */}
        <Col xs={12} md={6}>
          <Card className="mb-3">
            <Card.Header>Delivery Address</Card.Header>
            <Card.Body>
              <AddressManager
                userId={userData.user.id}
                onSelectAddress={(addressId) => setSelectedAddress(addressId)}
                selectedAddress={selectedAddress}
              />
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header>Payment Options</Card.Header>
            <Card.Body>
              <Form.Check
                type="radio"
                label="Cash on Delivery"
                name="paymentMode"
                value="Cash on Delivery"
                checked={paymentMode === "Cash on Delivery"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Online Payment"
                name="paymentMode"
                value="Online Payment"
                checked={paymentMode === "Online Payment"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Net Banking"
                name="paymentMode"
                value="Net Banking"
                checked={paymentMode === "Net Banking"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
            </Card.Body>
          </Card>
          <div className="text-center">
        <Button variant="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default CheckoutPage;
