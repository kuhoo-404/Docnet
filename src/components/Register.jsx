import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // add more fields if needed
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      console.log("Registered:", res.data);
      navigate("/"); // redirect after successful registration
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <a href="#" className="forgot-password">Forgot your password?</a>
        <button type="submit" className="sign-in-btn">Sign up</button>
      </form>
      <button
        type="button"
        className="create-account-btn"
        onClick={() => navigate("/login")}
      >
        Already have an account?
      </button>
    </div>
  );
};

export default Register;
