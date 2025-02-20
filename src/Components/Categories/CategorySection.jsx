// import React, { useState, useEffect } from "react";
// import { baseUrl } from "../../API/Api";
// import axios from "axios";
// import ProductCard from "../cards/ProductCard";

// function CategorySection() {
//   const [products, setProducts] = useState([]);
//   const [showMore, setShowMore] = useState(false);
//   const [selectedSize, setSelectedSize] = useState({});
//   const [selectedColor, setSelectedColor] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/getAllProduct`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleQuickView = (product) => {
//     setCurrentProduct(product);
//     setShowModal(true);
//   };

//   const handleAddToCart = (product) => {
//     // Add product to cart logic
//   };

//   const handleSizeSelect = (productId, size) => {
//     setSelectedSize((prevState) => ({ ...prevState, [productId]: size }));
//   };

//   const handleColorSelect = (productId, color) => {
//     setSelectedColor((prevState) => ({ ...prevState, [productId]: color }));
//   };

//   const displayedProducts = showMore ? products : products.slice(0, 4);

//   return (
//     <div className="container mt-3">
//       <p className="ms-3">
//         <span className="text-warning">|</span> Men's Collection
//       </p>
//       <h3 className="text-center">Top Seller</h3>
//       <div className="row col-md-3">
//         <ProductCard
//           displayedProducts={displayedProducts}
//           handleQuickView={handleQuickView}
//           handleAddToCart={handleAddToCart}
//           handleSizeSelect={handleSizeSelect}
//           handleColorSelect={handleColorSelect}
//           selectedSize={selectedSize}
//           selectedColor={selectedColor}
//           showMore={showMore}
//           // setShowMore={setShowMore}
//           products={products}
//           currentProduct={currentProduct}
//           showModal={showModal}
//           setShowModal={setShowModal}
//         />
//       </div>
//       {/* {products.length > 4 && (
//         <div className="text-end mt-3">
//           <button
//             className="btn btn-outline-dark"
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Show Less" : "Show More"}
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default CategorySection;
