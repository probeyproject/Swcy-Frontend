import React, { useState, useEffect } from 'react';
import './Allcategory.css';
import { baseUrl } from '../../API/Api';
import axios from 'axios';
import banner1 from "../../assets/Images/banner (1).png";


const AllCategory = () => {
  const [data, setData] = useState([]);

  const fetchProductbyCategory = async () => {
    // fetch products by category
    const response = await axios.get(`${baseUrl}/getAllCategories`);

    const data = await response.data;
    setData(data);
  };

  useEffect(() => {
    fetchProductbyCategory();
  }, []);

  return (
    <div className="container_color">
      {/* Heading and Subheading */}
      <div className="text-center mb-4 pt-5 ">
        <h5 className='heading_1 '>Everything you need for your fitness journey is right here</h5>
        <h3 className="text-center py-2"><span className="text-warning">:|</span> Category <span className="text-warning">|:</span></h3>

        {/* <h3 className='fw-bold'>Category</h3> */}
      </div>

      <div className="row d-flex flex-row p-3">
        {data.map((category) => (
          <div key={category.id} className="col-md-3 col-sm-4 col-lg-3 col-6">
            <div className="card card_category border mb-3">
              <img
                src={category.category_url}
                className=" "
                style={{ height: "20%", width: "100%" }}
                alt={category.category_name}
              />
              {/* Full Card Hover Effect */}
              <div
                className="position-absolute hover-opacity"
              >
                <h2 className="mb-0 text-light position-absolute position_cardtext">
                  {category.category_name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
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
            background: "transparent",
            backdropFilter: "blur(5px)",
            // backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional overlay
            width: "80%",
            height: "auto",
            padding: "2%",
            borderRadius: "5px",
          }}
        >
          <h5 className='text-dark' style={{ fontWeight: "bold" }}>
            Welcome to Our Store
          </h5>
          <p className='text-dark'>
            Discover the best products for your needs. Shop now and enjoy amazing deals!
          </p>
          <button
            style={{
              marginTop: "10px",
              padding: "10px 20px",
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
    </div >
  );
};

export default AllCategory;
