import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Wishlist.css";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import ProductCard from "../cards/ProductCard";

function Wishlist() {
  const { userData, isAuthenticated } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  const userId = userData?.user?.id;

  // Function to fetch the wishlist
  const fetchAllWishlist = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getWishlist/${userId}`);
      const data = await response.data;
      setWishlist(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  // fuction to hanlde wishlist database

  // Function to handle wishlist item deletion
  // Handle Delete
  const handleDelete = async (productId) => {
    try {
      if (!isAuthenticated || !userData?.id) {
        return;
      }

      const requestBody = {
        userId: userData.id,
        product_id: productId,
      };

      await axios.delete(`${baseUrl}/deleteWishlist`, { data: requestBody });

      // Refresh the wishlist after deletion
      fetchAllWishlist();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Fetch the wishlist on component mount
  useEffect(() => {
    fetchAllWishlist();
  }, [isAuthenticated, userData]);

  if (!isAuthenticated) {
    return <p>Please log in to view your wishlist.</p>;
  }

  return (
    <div className="container mt-4 mb-4">
      <h3 className="text-center rounded">My Wishlist!</h3>
      <div className="row mt-3">
        {wishlist.length === 0 ? (
          <p className="text-center">No items in your wishlist.</p>
        ) : (
          wishlist.map((item) => (
            <div className="col-md-4 mb-4" key={item.product_id}>
              <ProductCard
                product_id={item.product_id}
                imageSrc={JSON.parse(item.product_image)} // Assuming `images` is an array of image URLs
                productName={item.product_name}
                currentPrice={item.product_price}
                originalPrice={item.originalPrice}
                brand_name={item.brand_name}
                description={item.description}
                discount={item.discount}
                size={item.size} // Assuming size is an array of available sizes
                colors={item.colors} // Assuming colors is an array of available colors
              />
              <button
                className="btn btn-danger mt-2 w-100"
                onClick={() => handleDelete(item.product_id)}
              >
                <FaTrash className="me-2" />
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
