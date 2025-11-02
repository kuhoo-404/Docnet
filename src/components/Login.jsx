import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "./AuthContext";  // ✅ import the auth context
import "./Login.css";

const Login = () => {
    const navigate = useNavigate(); 
    const { login } = useAuth(); // ✅ get the login function
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ simulate successful login by storing dummy user data
        const userData = { email }; 
        login(userData);  // update the context with the logged-in user

        // ✅ redirect to Home after login
        navigate("/");
    };

    return (
        <div className="login-container">
            <h2>Login here</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <a href="#" className="forgot-password">Forgot your password?</a>
                <button type="submit" className="sign-in-btn">Sign in</button>
            </form>
            <button 
                type="button" 
                className="create-account-btn" 
                onClick={() => navigate("/register")}
            >
                Create new account
            </button>
        </div>
    );
};

export default Login;
