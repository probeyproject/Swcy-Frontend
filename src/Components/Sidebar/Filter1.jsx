import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../API/Api"; // Import your API base URL
import Navbar from "./Navbar"; // Assuming your Navbar handles filter changes
import "./App.css";

function Filter1() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({});
  const [showScratchCard, setShowScratchCard] = useState(true);

  // Fetch all categories
  const GetallCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getAllCategories`);
      setCategories(response?.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch all products
  const getallproducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getAllProduct`);
      setProducts(response?.data);
      setFilteredProducts(response?.data); // Initialize filteredProducts with all products
      // console.log(response.data);

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products by category (optional based on filters)
  const GetProductsbyCategory = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/getCategoryById/${id}`);
      setProducts(response?.data);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  // Run when filters change
  useEffect(() => {
    // Fetch initial data
    GetallCategories();
    getallproducts();
  }, []);

  // Filter products based on filters
  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      // Filter by category
      if (filters.category && filters.category.length > 0) {
        filtered = filtered.filter((product) =>
          filters.category.includes(product.category)
        );
      }

      // Filter by color, size, price, etc. (add more conditions as needed)
      if (filters.Color && filters.Color.length > 0) {
        filtered = filtered.filter((product) =>
          JSON.parse(product.product_color).some(color =>
            filters.Color.includes(color)
          )
        );
      }

      if (filters.Size && filters.Size.length > 0) {
        filtered = filtered.filter((product) =>
          JSON.parse(product.product_size).some(size =>
            filters.Size.includes(size)
          )
        );
      }

      if (filters.Price && filters.Price.length > 0) {
        filtered = filtered.filter((product) =>
          filters.Price.includes(product.product_price)
        );
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="filter_page_container">
      <h1 className="filter_page_heading">Men's Printed Shirts</h1>
      <Navbar categories={categories} onFilterChange={handleFilterChange} />
      {/* {console.log("Filtered Products:", filteredProducts)}
      {console.log("Type of filteredProducts:", typeof filteredProducts)
      } */}

      <div className="filter_page_product_grid">
        {filteredProducts && Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            // Parse JSON strings to real arrays
            const productImages = JSON.parse(product?.product_image || "[]");
            const productSizes = JSON.parse(product?.product_size || "[]");
            const productColors = JSON.parse(product?.product_color || "[]");

            return (
              <div key={product.product_id} className="filter_page_product_card">
                {/* {console.log("Rendering product:", product)} */}

                {/* Show First Image */}
                <img
                  src={productImages.length > 0 ? productImages[0] : ""}
                  alt={product.product_name}
                  className="filter_page_product_image"
                />

                <h3 className="filter_page_product_name">{product.product_name}</h3>

                <p className="filter_page_product_price">
                  ₹{product.product_price}{" "}
                  <span className="filter_page_mrp">₹{product.discount_price}</span>
                </p>

                <p className="filter_page_discount">
                  {((1 - product.discount_price / product.product_price) * 100).toFixed(0)}% Off
                </p>

                {/* Show Sizes */}
                <p className="filter_page_product_sizes">
                  Sizes: {productSizes.join(", ")}
                </p>

                {/* Show Colors */}
                <p className="filter_page_product_colors">
                  Colors: {productColors.join(", ")}
                </p>
              </div>
            );
          })
        ) : (
          <p>No products matching these filters.</p>
        )}
      </div>

    </div>
  );
}

export default Filter1;
