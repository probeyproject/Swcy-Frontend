import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { baseUrl } from "../../API/Api";
import "./Authcss.css"

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [referralCode, setReferralCode] = useState("");  // New field for referral code
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone); // Indian phone number validation

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form submission refresh

    if (!firstName || !lastName || !email || !password || !phone) {
      toast.warning("Please fill in all required fields!");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!isValidPhone(phone)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    if (!profilePic) {
      toast.error("Please upload a profile picture!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("profilePic", profilePic);
      formData.append("referralCode", referralCode);  // Send referral code to backend

      const response = await axios.post(`${baseUrl}/signup`, formData);

      toast.success("Signup successful!");
      console.log(response.data);

      // Redirect to login page after successful signup
      navigate("/userprofile");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="text-center text-lg-start">
          <div className="">
            <div className="row gx-lg-5 align-items-center">
              <div className="">
                <h3 className="text-center fw-bold mb-3">Sign Up</h3>
                <div className="card border-0">
                  <div className="card-body p-2">
                    <form onSubmit={handleSignup}>
                      {/* First Name, Middle Name, and Last Name */}
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            placeholder="Middle Name"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-3 position-relative">
                        <input
                          type={showPassword ? "text" : "password"} // Toggle input type
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="button_button btn-link text-dark position-absolute end-0 top-50 translate-middle-y"
                          onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />} {" "}
                        </button>
                      </div>

                      {/* Phone */}
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>

                      {/* Profile Picture */}
                      <div className="mb-3">
                        <input
                          type="file"
                          onChange={(e) => setProfilePic(e.target.files[0])}
                          required
                        />
                      </div>

                      {/* Referral Code (new) */}
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Referral Code (Optional)"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-dark"
                          disabled={loading}
                        >
                          {loading ? "Signing up..." : "Sign Up"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
