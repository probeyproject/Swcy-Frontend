import React from "react";
import banner1 from "../../assets/Images/banner (1).png";

const OfferBanner = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {/* Banner Image */}
      <img
        src={banner1}
        alt="Offer Banner"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Welcome to Our Store
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Discover the best products for your needs. Shop now and enjoy amazing deals!
        </p>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#ff5733",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
