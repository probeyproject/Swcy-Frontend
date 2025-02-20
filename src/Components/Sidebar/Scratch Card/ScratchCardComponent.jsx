// import React, { useRef, useEffect, useState } from "react";
// import ScratchCard from "react-scratchcard";
// import "./ScratchCard.css";
// import ScratchPNG from '../../../assets/Images/scratchPNG.png'
// import Confetti from "react-confetti";

// const ScratchCardComponent = ({ onClose }) => {
//   const cardRef = useRef(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const prizeValue = `${Math.floor(Math.random() * 81) + 20}% Off`;

//   const handleScratchComplete = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000);
//   };

//   const settings = {
//     width: 350,
//     height: 350,
//     image: ScratchPNG,
//     finishPercent: 40,
//     brushSize: 30,
//     onComplete: handleScratchComplete,
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cardRef.current && !cardRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     // Listen for window resize to adjust confetti dimensions
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("resize", handleResize);
//     //clean up functions
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [onClose]);

//   return (
//     <>
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={500}
//         />
//       )}

//       <div ref={cardRef} className="scratch-card-container">
//         <ScratchCard {...settings}>
//           <div className="card-content">
//             <h4>
//               Congratulations! 🎉
//               <br /> Use this promo code to avail your discount.
//             </h4>
//             <span>PROMO CODE: AX3BX2CX1</span>
//             <h3>{prizeValue}</h3>
//             <button className="scratch_card_login_btn">Login</button>
//           </div>
//         </ScratchCard>
//       </div>
//     </>
//   );
// };

// export default ScratchCardComponent;
