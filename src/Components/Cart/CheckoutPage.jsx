import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: "Italy",
    deliveryMethod: "standard",
    paymentMethod: "card",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "A set of cosmetics for the body and face",
      price: 49,
      quantity: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp",
    },
    {
      id: 2,
      name: "Black ceramic mug",
      price: 19,
      quantity: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp",
    },
    {
      id: 3,
      name: "Notebook and planner set",
      price: 59,
      quantity: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp",
    },
  ]);

  const deliveryOptions = {
    standard: {
      label: "Standard home delivery",
      cost: 0,
      details: "Free • Between 3 and 5 business days",
    },
    express: {
      label: "Express home delivery",
      cost: 10,
      details: "€10 • Between 1 and 2 business days",
    },
    pickup: {
      label: "Standard pick up location",
      cost: 0,
      details: "Free • Between 3 and 5 business days",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditProduct = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const deliveryCost = deliveryOptions[formData.deliveryMethod].cost;
  const total = subtotal + deliveryCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted", formData);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <h5 className="mb-3">Your information</h5>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="apartment"
                className="form-control"
                placeholder="Apartment, suit, etc."
                value={formData.apartment}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="postalCode"
                className="form-control"
                placeholder="Postal code"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <select
                name="country"
                className="form-select"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="Italy">Italy</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <h5 className="mt-4 d-flex justify-content-start">Delivery</h5>
            {Object.keys(deliveryOptions).map((key) => (
              <div className="form-check mb-2" key={key}>
                <input
                  type="radio"
                  name="deliveryMethod"
                  id={key}
                  className="form-check-input"
                  value={key}
                  checked={formData.deliveryMethod === key}
                  onChange={handleInputChange}
                />
                <label className="form-check-label  d-flex justify-content-start" htmlFor={key}>
                  {deliveryOptions[key].label} ({deliveryOptions[key].details})
                </label>
              </div>
            ))}

            <h5 className="mt-4  d-flex justify-content-start">Payment</h5>
            <div className="form-check mb-2">
              <input
                type="radio"
                name="paymentMethod"
                id="card"
                className="form-check-input"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleInputChange}
              />
              <label className="form-check-label  d-flex justify-content-start" htmlFor="card">
                Card (Credit or debit card)
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="paymentMethod"
                id="paypal"
                className="form-check-input"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleInputChange}
              />
              <label className="form-check-label d-flex justify-content-start" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <h5>Your order</h5>
            <ul className="list-group mb-3">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-thumbnail me-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div>
                      <strong>{product.name}</strong>
                      <p className="mb-0">
                        Quantity:{" "}
                        <input
                          type="number"
                          className="form-control d-inline-block"
                          style={{ width: "60px" }}
                          value={product.quantity}
                          onChange={(e) =>
                            handleEditProduct(product.id, parseInt(e.target.value) || 0)
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <span>Order value</span>
                <strong>€{subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Delivery</span>
                <strong>€{deliveryCost.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>€{total.toFixed(2)}</strong>
              </li>
            </ul>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Pay Order
            </button>

            <p className="text-muted mt-2 text-center" style={{ fontSize: "0.85rem" }}>
                By clicking “Pay Order” you confirm you have read our{" "}
                <a href="#">Privacy Notice</a> and <a href="#">Cookie Notice</a>. I agree to the{" "}
                <a href="#">terms & conditions</a> of the store.
              </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
