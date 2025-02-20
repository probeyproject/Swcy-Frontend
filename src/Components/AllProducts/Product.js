const Product = [

  {
    id: 0,
    name: "Sample Product",
    price: 299,
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    originalPrice: 500,
    discount: 40,
    size: ["S", "M", "L", "XL", "XXL", "XXXL"],
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    image: [
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75", // Placeholder image URLs
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Best Deals",
    category: "Women",
  },

  {
    id: 1,
    name: "Sample Product",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 299,
    originalPrice: 500,
    discount: 40,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Best Deals",
    category: "Women",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["M", "L", "XL"]
  },
  {
    id: 2,
    name: "Graphic Printed T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",
    price: 399,
    originalPrice: 600,
    discount: 33,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-black-order-of-the-phoenix-graphic-printed-oversized-t-shirt-589279-1734613604-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Oversized Fit",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 3,
    name: "Chill Guy Graphic T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 499,
    originalPrice: 700,
    discount: 29,
    image:[ "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Highly Rated",
    category: "Women",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["M", "L"]
  },
  {
    id: 4,
    name: "Batman Oversized T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 349,
    originalPrice: 600,
    discount: 42,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-batman-graphic-printed-oversized-t-shirt-646750-1734686089-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M", "L"]
  },
  {
    id: 5,
    name: "Serenity Graphic T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 399,
    originalPrice: 650,
    discount: 39,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-grey-serenity-graphic-printed-oversized-t-shirt-645951-1730200987-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["M", "L"]
  },
  {
    id: 6,
    name: "Oversized Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 599,
    originalPrice: 850,
    discount: 29,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "XL"]
  },
  {
    id: 7,
    name: "Graphic Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 699,
    originalPrice: 950,
    discount: 26,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["M", "L"]
  },
  {
    id: 8,
    name: "Gardenia Oversized Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 799,
    originalPrice: 1200,
    discount: 33,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-gardenia-oversized-hoodie-499058-1731939910-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["XL", "L"]
  },
  {
    id: 9,
    name: "Black Chill Guy Oversized T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 299,
    originalPrice: 500,
    discount: 40,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Limited Time Offer",
    category: "Women",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["M", "L"]
  },
  {
    id: 10,
    name: "Vintage T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 199,
    originalPrice: 400,
    discount: 50,
    image: ["https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-black-order-of-the-phoenix-graphic-printed-oversized-t-shirt-589279-1734613604-1.jpg&w=1920&q=75",
      "https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
    ],
    offers: "Best Seller",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 11,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 12,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 13,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg","https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 14,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 15,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 16,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 17,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 18,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 19,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 20,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 21,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 22,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  },
  {
    id: 24,
    name: "Oversized Printed Hoodie",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 899,
    originalPrice: 1300,
    discount: 31,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Hot",
    category: "Mens",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["L", "M"]
  },
  {
    id: 25,
    name: "Slogan T-shirt",
    description: "This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers.",

    price: 249,
    originalPrice: 450,
    discount: 45,
    image: ["https://images.bewakoof.com/t1080/men-s-black-chill-guy-graphic-printed-oversized-acid-wash-t-shirt-655018-1733303736-1.jpg",
      "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-grey-batman-ombre-oversized-t-shirt-617004-1718803064-1.jpg&w=1920&q=75",
    ],
    offers: "Special Discount",
    category: "Kids",
    colors: ["Red", "Blue", "Green", "Yellow", "Black",],
    size: ["S", "M"]
  }
];

export default Product;
