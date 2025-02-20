// import React, { useState, useEffect, useContext } from "react";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { baseUrl } from "../../API/Api";
// import { AuthContext } from "../../AuthContext";
// import AddressManager from "../UserProfile/AddressManager"; // Adjust the import path as needed

// const CheckoutPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { userData, isAuthenticated } = useContext(AuthContext);

//   // Extract order details passed from ProductDetail
//   const { product, selectedSize, selectedColor, selectedQuantity } = state || {};
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [paymentMode, setPaymentMode] = useState("Cash on Delivery");
//   const [coupon, setCoupon] = useState("");
//   const [orderSummary, setOrderSummary] = useState({
//     productPrice: product ? product.product_price * selectedQuantity : 0,
//     shippingCharges: 50, // Example shipping charge
//     couponDiscount: 0,
//     total: 0,
//   });

//   // Update order total based on summary values
//   useEffect(() => {
//     const total =
//       orderSummary.productPrice +
//       orderSummary.shippingCharges -
//       orderSummary.couponDiscount;
//     setOrderSummary((prev) => ({ ...prev, total }));
//   }, [orderSummary.productPrice, orderSummary.shippingCharges, orderSummary.couponDiscount]);

//   const handlePlaceOrder = async () => {
//     if (!selectedAddress) {
//       alert("Please select a delivery address.");
//       return;
//     }

//     const orderData = {
//       products: [
//         { id: product.product_id, productName: product.product_name, unit: selectedQuantity },
//       ],
//       totalPrice: orderSummary.total,
//       cupon: coupon,
//       orderStatus: "Pending",
//       payment: paymentMode,
//       quantity: selectedQuantity,
//       userId: userData.user.id,
//       deliveryDate: new Date().toISOString(),
//       deliveryTimeSlot: "9AM-12PM",
//       address_id: selectedAddress,
//       payment_mode: paymentMode,
//       pointsUsed: 0,
//       gst_cost: 0,
//       gst_percentage: 0,
//       shipping_cost: orderSummary.shippingCharges,
//     };

//     try {
//       const response = await axios.post(`${baseUrl}/create/order/${userData.user.id}`, orderData);
//       if (response.data && response.data.orderId) {
//         alert("Order placed successfully!");
//         navigate("/order-success", { state: { orderId: response.data.orderId } });
//       } else {
//         alert("Failed to place order.");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error.response ? error.response.data : error.message);
//       alert("An error occurred while placing your order. Please try again.");
//     }
//   };

//   if (!product) {
//     return <div>Order details not available.</div>;
//   }

//   return (
//     <Container className="my-4">
//       <h2>Checkout</h2>
//       <Row>
//         {/* Left Column: Order Summary & Payment Options */}
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Header>Order Summary</Card.Header>
//             <Card.Body>
//               <p><strong>Product:</strong> {product.product_name}</p>
//               <p>
//                 <strong>Price:</strong> ₹{product.product_price} x {selectedQuantity}
//               </p>
//               <p>
//                 <strong>Subtotal:</strong> ₹{orderSummary.productPrice}
//               </p>
//               <p>
//                 <strong>Shipping Charges:</strong> ₹{orderSummary.shippingCharges}
//               </p>
//               <Form.Group className="mb-3">
//                 <Form.Label>Coupon Code</Form.Label>
//                 <Form.Control 
//                   type="text"
//                   value={coupon}
//                   onChange={(e) => setCoupon(e.target.value)}
//                   placeholder="Enter coupon code"
//                 />
//               </Form.Group>
//               <p><strong>Total:</strong> ₹{orderSummary.total}</p>
//             </Card.Body>
//           </Card>
//           <Card className="mb-3">
//             <Card.Header>Payment Options</Card.Header>
//             <Card.Body>
//               <Form.Check 
//                 type="radio"
//                 label="Cash on Delivery"
//                 name="paymentMode"
//                 value="Cash on Delivery"
//                 checked={paymentMode === "Cash on Delivery"}
//                 onChange={(e) => setPaymentMode(e.target.value)}
//               />
//               <Form.Check 
//                 type="radio"
//                 label="Online Payment"
//                 name="paymentMode"
//                 value="Online Payment"
//                 checked={paymentMode === "Online Payment"}
//                 onChange={(e) => setPaymentMode(e.target.value)}
//               />
//               <Form.Check 
//                 type="radio"
//                 label="Net Banking"
//                 name="paymentMode"
//                 value="Net Banking"
//                 checked={paymentMode === "Net Banking"}
//                 onChange={(e) => setPaymentMode(e.target.value)}
//               />
//             </Card.Body>
//           </Card>
//         </Col>
//         {/* Right Column: Address Selection & Product Info */}
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Header>Delivery Address</Card.Header>
//             <Card.Body>
//               <AddressManager 
//                 userId={userData.user.id} 
//                 onSelectAddress={(addressId) => setSelectedAddress(addressId)}
//                 selectedAddress={selectedAddress}
//               />
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Header>Product Details</Card.Header>
//             <Card.Body>
//               <p><strong>Name:</strong> {product.product_name}</p>
//               <p><strong>Description:</strong> {product.product_description}</p>
//               <p>
//                 <strong>Selected Size:</strong> {selectedSize} &nbsp;
//                 <strong>Selected Color:</strong> {selectedColor}
//               </p>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <div className="text-center">
//         <Button variant="primary" onClick={handlePlaceOrder}>
//           Place Order
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default CheckoutPage;
