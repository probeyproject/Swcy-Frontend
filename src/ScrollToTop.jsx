import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Run effect whenever the route changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
