import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import downArrowIcon from "../../assets/Images/svg-dropdown.png";
import upArrowIcon from "../../assets/Images/svg-dropdown-open.png";
import axios from "axios";
import { baseUrl } from "../../API/Api";

const Navbar = ({ onFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({ Size: [], Color: [], Price: [] });
  const [selectedFilters, setSelectedFilters] = useState({});
  const dropdownRef = useRef(null);

  // Fetch products and extract filters (size, color, price)
  const fetchFilters = async () => {
    try {
      const productResponse = await axios.get(`${baseUrl}/getAllProduct`);
      // Extract sizes and colors from products
      let sizes = new Set();
      let colors = new Set();
      let prices = new Set();

      productResponse.data.forEach((product) => {
        if (product.product_size) {
          JSON.parse(product.product_size).forEach((size) => sizes.add(size));
        }
        if (product.product_color) {
          JSON.parse(product.product_color).forEach((color) => colors.add(color));
        }
        if (product.product_price) {
          // Assuming price is a string like "299.00", we can categorize it for the price filter
          prices.add(product.product_price);
        }
      });

      setFilters({
        Size: Array.from(sizes),
        Color: Array.from(colors),
        Price: Array.from(prices),
      });
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };

  useEffect(() => {
    fetchFilters(); // Fetch filters on component mount

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (category) => {
    setOpenDropdown((prev) => (prev === category ? null : category));
  };

  const handleCheckboxChange = (category, item) => {
    setSelectedFilters((prevFilters) => {
      const updatedCategoryFilters = prevFilters[category] || [];
      const newFilters = updatedCategoryFilters.includes(item)
        ? updatedCategoryFilters.filter((i) => i !== item) // Remove item
        : [...updatedCategoryFilters, item]; // Add item

      return {
        ...prevFilters,
        [category]: newFilters.length ? newFilters : undefined, // Remove empty categories
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <>
      <nav className="filter_navbar">
        <div className="filter_nav_container">
          <ul className="filter_nav_menu">
            {Object.keys(filters).map((category) => (
              <li key={category} className="filter_nav_item">
                <button
                  className="filter_nav_link"
                  onClick={() => toggleDropdown(category)}
                >
                  {category}
                  <img
                    className="filter_downArrowIcon"
                    alt="Expand"
                    src={openDropdown === category ? upArrowIcon : downArrowIcon}
                  />
                </button>

                {/* Show dropdown when category is open */}
                {openDropdown === category && filters[category]?.length > 0 && (
                  <ul className="filter_dropdown_menu" ref={dropdownRef}>
                    {filters[category].map((item, index) => (
                      <li key={index} className="filter_dropdown_item">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category]?.includes(item) || false}
                          onChange={() => handleCheckboxChange(category, item)}
                        />
                        <label>{item}</label>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Show selected filters */}
      {Object.keys(selectedFilters).length > 0 && (
        <div className="selected_filters_row">
          <p>
            REFINE BY:
            {Object.keys(selectedFilters).map((category) =>
              selectedFilters[category].map((item, index) => (
                <span key={`${category}-${index}`} className="filter_tag">
                  {item}
                </span>
              ))
            )}
          </p>
          <button className="filter_btn_Clear_all" onClick={clearFilters}>
            Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
