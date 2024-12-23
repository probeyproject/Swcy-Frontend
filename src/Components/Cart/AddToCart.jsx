import React, { useState } from 'react';
import { FaTrash, FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddToCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Blue denim shirt',
      color: 'blue',
      size: 'M',
      price: 17.99,
      quantity: 1,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp',
    },
    {
      id: 2,
      name: 'Red hoodie',
      color: 'red',
      size: 'M',
      price: 17.99,
      quantity: 1,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp',
    },
  ]);

  // Function to handle quantity changes
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  // Function to remove an item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          {/* Left Section */}
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item) => (
                  <div key={item.id} className="row mb-4">
                    {/* Image */}
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={item.image} className="w-100" alt={item.name} />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                      <button
                        className="btn btn-danger btn-sm me-1 mb-2"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                      <button className="btn btn-primary btn-sm mb-2">
                        <FaHeart />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <FaMinusCircle />
                        </button>

                        <div className="form-outline">
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="form-control text-center"
                            style={{ maxWidth: '60px' }}
                          />
                        </div>

                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <FaPlusCircle />
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="card mb-4">
              <div className="card-body">
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p>
                  <strong>We accept</strong>
                </p>
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  className="me-2"
                  style={{height:"30px"}}
                  width="45px"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0 pb-0">
                    Products
                    <span>${calculateTotal()}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <p className="mb-0">(including all taxes.)</p>
                    </div>
                    <span>
                      <strong>${calculateTotal()}</strong>
                    </span>
                  </li>
                </ul>
                <Link className="btn btn-primary btn-lg btn-block" to='/checkout'>Go to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddToCart;
