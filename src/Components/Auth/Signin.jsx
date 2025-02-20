
import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import cookies
import { AuthContext } from "../../AuthContext"; // Import AuthContext
import { baseUrl } from "../../API/Api";
import "./Authcss.css"

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const navigate = useNavigate();

  // Validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle login with email and password
  const handleLoginWithEmail = async () => {
    if (!email || !password) {
      toast.warning("Please enter email and password!");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
      
    }

    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
         // Parse error response
        throw new Error(errorData.message || "Login failed.");

        

      }

      const data = await response.json();

      if (data.token) {
        // Use the AuthContext login function
        login(data);  

        // Store the token in cookies
        Cookies.set("accessToken", data.token, { expires: 1 });

        
        

        // Redirect to the profile page with user data
        navigate("/", { state: { user: data.user } });
      } else {
        toast.error("Token not received. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  

  return (
    <>
      <section>
        <div className="px-4 py-1 text-center text-lg-start">
          <div className="">
            <div className="row gx-lg-5 align-items-center">
          

            
              <div className="">
                <h3 className="text-center fw-bold mb-3">Sign In</h3>
                <div className="card  border-0">
                  <div className="card-body p-2">
                    {/* Email Login Form */}
                    <div className="mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        placeholder="Password"
                        className=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className=" btn-link  position-absolute end-0 top-50 translate-middle-y "
                        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
                        {/* Toggle eye icon */}
                      </button>
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={handleLoginWithEmail}
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Sign In"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right Form */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
