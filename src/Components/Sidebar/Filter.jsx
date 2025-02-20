import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Dropdown,
  Collapse,
  Form,
  Card,
  Badge,
} from "react-bootstrap";
import {
  FaEye,
  FaFilter,
  FaHeart,
  FaHome,
  FaSort,
  FaStar,
} from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Product from "../AllProducts/Product";
import "./Productgrid1.css";  
import axios from "axios";
import { baseUrl } from "../../API/Api";
import { useParams } from "react-router-dom";
function Filter() {
  const productid = useParams();
  // cosnt [Allproducts,setAllProducts]=useState([])
  const [product, setProduct] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // To track the number of products to display
  const [priceRange, setPriceRange] = useState([100, 1000]); // Initial price range
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added for search
  const [searchBadge, setSearchBadge] = useState(null); // Badge for search term
  const [Categories, SetCategories] = useState([]);

  const GetProductsbyCategory = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/getCategoryById/${id}`);
      console.log(response?.data);
      setProduct(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetallCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getAllCategories`);
      // const categoryList = response.data.map((item) => item.category_name);
      SetCategories(response?.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const getallproducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getAllProduct`);
      // console.log(response?.data);
      setProduct(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetallCategories();
    getallproducts();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = Product.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
      setProduct(filtered);
      setSearchBadge(term);
    } else {
      setProduct(Product);
      setSearchBadge(null);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchBadge(null);
    setProduct(Product);
  };

  const sortOptions = [
    { name: "Most Popular", key: "popularity" },
    { name: "Best Rating", key: "rating" },
    { name: "Newest", key: "newest" },
    { name: "Price: Low to High", key: "priceAsc" },
    { name: "Price: High to Low", key: "priceDesc" },
  ];

  // const subCategories = [
  //   { name: "Jackets", href: "#" },
  //   { name: "Pants", href: "#" },
  //   { name: "Shoes", href: "#" },
  //   { name: "T-Shirts", href: "#" },
  //   { name: "Shirts", href: "#" },
  // ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "category",
      name: "Collection",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "men", label: "Men", checked: true },
        { value: "women", label: "Women", checked: false },
        { value: "kids", label: "Kids", checked: false },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "s", label: "S", checked: false },
        { value: "m", label: "M", checked: true },
        { value: "l", label: "L", checked: false },
        { value: "xl", label: "XL", checked: false },
        { value: "xxl", label: "XXL", checked: false },
        { value: "xxxl", label: "XXXL", checked: false },
      ],
    },
  ];

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handler to update filters and products
  const applyFilter = (filter) => {
    setSelectedFilters((prev) => {
      const updatedFilters = prev.includes(filter)
        ? prev.filter((f) => f !== filter) // Remove filter
        : [...prev, filter]; // Add filter

      updateFilteredProducts(updatedFilters); // Filter products based on new filters
      return updatedFilters;
    });
  };

  // Function to update filtered products based on the given filters
  const updateFilteredProducts = (filters) => {
    let filtered = Product.filter((item) => {
      const matchesCategory = filters.includes(item.category);
      const matchesSize =
        item.size && filters.some((size) => item.size.includes(size));
      return matchesCategory || matchesSize;
    });

    // Apply price filter
    filtered = filtered.filter(
      (item) => item.price >= 100 && item.price <= 1000
    );

    setProduct(filtered);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    // Reset all filters to default unchecked values
    filters.forEach((section) => {
      section.options.forEach((option) => {
        option.checked = false;
      });
    });
    setPriceRange([100, 1000]); // Reset price range
  };

  const sortProducts = (key) => {
    const sorted = [...product].sort((a, b) => {
      if (key === "priceAsc") return a.price - b.price;
      if (key === "priceDesc") return b.price - a.price;
      return 0;
    });
    setProduct(sorted);
  };

  // Function to handle "View More" button
  const showMoreProducts = () => {
    setVisibleCount((prev) => prev + 3); // Increase the count by 3 to show more products
  };

  // Handle changes to the price range
  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
    filterProductsByPrice(newRange);
  };

  // Function to filter products based on price range
  const filterProductsByPrice = (range) => {
    const filtered = Product.filter(
      (item) => item.price >= range[0] && item.price <= range[1]
    );
    setProduct(filtered);
  };

  return (
    <div className="bg-light">
      <Modal
        show={mobileFiltersOpen}
        onHide={() => setMobileFiltersOpen(false)}
        centered
      >
        {/* { console.log(Categories)} */}
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h2>Search Products</h2>
            <Form.Control
              type="text"
              placeholder="Search by name or category"
              value={searchTerm}
              onChange={handleSearch}
              className="mb-4"
            />
            {searchBadge && (
              <Badge
                bg="secondary"
                className="me-2 mb-3"
                pill
                onClick={clearSearch}
                style={{ cursor: "pointer" }}
              >
                {searchBadge} ✕
              </Badge>
            )}

            <h2>Categories</h2>
            {/* <h1>jatin</h1> */}
            <ul className="list-unstyled mb-4">
              {Categories.map((category, index) => (
                <li key={index}>
                  <a
                    // href={`/${category.toLowerCase().replace(/\s+/g, '-')}`} // Generate dynamic href
                    className="text-decoration-none text-black"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Card key={section.id} className="mb-3">
                <Card.Header
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={openSections[section.id] || false}
                  className="d-flex justify-content-between align-items-center cursor-pointer"
                >
                  {section.name}
                  <span className="fs-5">
                    {openSections[section.id] ? "-" : "+"}
                  </span>
                </Card.Header>
                <Collapse in={openSections[section.id] || false}>
                  <div className="p-3">
                    {section.options.map((option) => (
                      <Form.Check
                        key={option.value}
                        type="checkbox"
                        id={`${section.id}-${option.value}`}
                        label={option.label}
                        defaultChecked={option.checked}
                        onChange={() => applyFilter(option.label)}
                      />
                    ))}
                  </div>
                </Collapse>
              </Card>
            ))}
          </Form>
        </Modal.Body>
      </Modal>

      <main className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p>
            <a
              className="text-dark"
              style={{ textDecoration: "none" }}
              href="/"
            >
              <FaHome className="mb-1" /> Home
            </a>{" "}
            <span>{">"}</span>{" "}
            <a
              className="text-dark"
              style={{ textDecoration: "none" }}
              href="/filter"
            >
              Filter
            </a>{" "}
          </p>
          <div className="d-flex align-items-center">
            <span>
              Sort By: <span></span>{" "}
            </span>
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-sort"
                className="d-flex align-items-center"
              >
                <FaSort className="me-2" />
                Select
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {sortOptions.map((option) => (
                  <Dropdown.Item
                    key={option.key}
                    onClick={() => sortProducts(option.key)}
                  >
                    {option.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Button
              variant="outline-black"
              className="ms-3 d-lg-none"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FaFilter className="me-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Clear Filters Button */}
        <Button variant="outline-dark" onClick={clearFilters} className="mb-3">
          ✕ Clear Filters
        </Button>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="card p-3">
              <Form>
                <h2>Search Products</h2>
                <Form.Control
                  type="text"
                  placeholder="Search by name or category"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="mb-4"
                />
                {searchBadge && (
                  <Badge
                    bg="secondary"
                    className="me-2 mb-3"
                    pill
                    onClick={clearSearch}
                    style={{ cursor: "pointer" }}
                  >
                    {searchBadge} ✕
                  </Badge>
                )}

                <h2>Categories</h2>
                <ul className="list-unstyled mb-4">
                  {Categories.map((category) => (
                    <li key={category.category_id}>
                      <a
                        style={{ cursor: "pointer" }}
                        className="text-decoration-none text-black"
                        onClick={() =>
                          GetProductsbyCategory(category.category_id)
                        } // Wrap in an arrow function
                      >
                        {category.category_name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Card key={section.id} className="mb-3">
                    <Card.Header
                      onClick={() => toggleSection(section.id)}
                      aria-expanded={openSections[section.id] || false}
                      className="d-flex justify-content-between align-items-center cursor-pointer"
                    >
                      {/* <h1>jatin</h1> */}
                      {section.name}
                      <span className="fs-5">
                        {openSections[section.id] ? "-" : "+"}
                      </span>
                    </Card.Header>
                    <Collapse in={openSections[section.id] || false}>
                      <div className="p-3">
                        {section.options.map((option, idx) => (
                          <Form.Check
                            key={option.value}
                            type="checkbox"
                            id={`${section.id}-${idx}`}
                            label={option.label}
                            defaultChecked={option.checked}
                            onChange={() => applyFilter(option.label)}
                          />
                        ))}
                      </div>
                    </Collapse>
                  </Card>
                ))}
                <Card className="mb-4">
                  <Card.Body>
                    <h5>Price Range</h5>
                    <div className="d-flex justify-content-between bg-light">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <Form.Range
                      min="100"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e) =>
                        handlePriceChange(0, Number(e.target.value))
                      }
                      className="mb-2 "
                    />
                    <Form.Range
                      min="100"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        handlePriceChange(1, Number(e.target.value))
                      }
                      className="mb-2"
                    />
                  </Card.Body>
                </Card>
              </Form>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex flex-wrap">
              {selectedFilters.map((filter) => (
                <Badge
                  key={filter}
                  bg="secondary"
                  className="me-2"
                  pill
                  onClick={() => applyFilter(filter)}
                  style={{ cursor: "pointer" }}
                >
                  {filter} ✕
                </Badge>
              ))}
            </div>

            <div className="card p-3">
              <div className="row">
                {product?.length > 0 ? (
                  product.slice(0, visibleCount).map((item) => {
                    // Parse product_image safely
                    let images = [];
                    try {
                      images = JSON.parse(item.product_image);
                    } catch (error) {
                      console.error("Error parsing product_image:", error);
                    }

                    return (
                      <div
                        className="col-6 col-md-4 col-lg-4 mb-4"
                        key={item.product_id} // Ensure each card has a unique key
                      >
                        <div className="product-card rounded border-0">
                          <div className="product_bestdeals">
                            <div className="rounded product_deals products_one">
                              {/* {item?.offers} */}
                            </div>
                          </div>
                          <div className="product_button1">
                            <Link
                              className="buttons_one rounded product_view"
                              to={`/product/${item.product_id}`}
                            >
                              <FaEye className="icon_btn1" />
                              <span className="button_text_p">Quick View</span>
                            </Link>
                            <Link
                              className="buttons_one rounded product_cart"
                              to="/checkout"
                            >
                              <MdOutlineAddShoppingCart className="icon_btn1" />
                              <span className="button_text_p">Buy Now</span>
                            </Link>
                          </div>
                          <img
                            src={images?.[0] || "/default-image.jpg"} // Use the first image or a default placeholder
                            alt={item.name || "Product"}
                            className="product-image rounded"
                          />
                          <div className="product-details">
                            <h3 className="product-name text_name_size">
                              {item.product_name}
                            </h3>
                            <div className="d-flex justify-content-start align-items-center">
                              <h5 className="text-black me-2 text_price_size">
                                ₹{item.product_price}
                              </h5>
                              {item.discount > 0 && item.originalPrice && (
                                <>
                                  <span className="text-danger text_original_size text-decoration-line-through">
                                    ₹{item.product_price}
                                  </span>
                                  <span className="badge bg-black text_disc_size ms-2">
                                    {item.discount_price}% OFF
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    className="text-center py-5 w-100"
                    style={{ marginTop: "200px" }}
                  >
                    <h5 className="text-muted">
                      No products found matching your filters.
                    </h5>
                    <Link className="btn btn-dark" to="/">
                      Back to Home
                    </Link>
                  </div>
                )}

                {/* View More Button */}
                {visibleCount < product.length && (
                  <div className="text-center">
                    <Button
                      onClick={showMoreProducts}
                      className="mb-2 btn-dark"
                    >
                      ↯ View More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Filter;
