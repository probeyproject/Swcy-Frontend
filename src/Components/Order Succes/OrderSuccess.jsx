import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import success from '../../assets/audio/success.mp3';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Play the success sound on mount
    const audio = new Audio(success); // Ensure this file exists in your public folder
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
  }, []);

  return (
    <Container className="text-center my-5">
      {/* Confetti animation */}
      <Confetti recycle={false} numberOfPieces={300} />
      <div className="py-5">
        <h1 className="display-4">Thank You!</h1>
        <p className="lead">
          Your order has been placed successfully.
          <br />
          Best wishes and we hope you enjoy your purchase!
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default OrderSuccess;
