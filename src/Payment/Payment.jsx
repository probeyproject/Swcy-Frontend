import React from 'react';
import axios from 'axios';

const Payment = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-order', {
        amount: 50000, // Amount in paise (500.00 INR)
      });
      
      const { id } = response.data;

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        amount: response.data.amount,
        currency: response.data.currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div>
      
      <a className='btn btn-animation proceed-btn fw-bold ' onClick={handlePayment}>Pay Now</a>
    </div>
  );
};

export default Payment;
