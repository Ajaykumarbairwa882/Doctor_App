import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful");
    }
  };

  return (
    <div className="page login-page">

      <h1>Doctor Login</h1>

      <p className="login-text">
        Login to access your hospital dashboard and manage appointments.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="login-options">
          <label>
            <input type="checkbox"/> Remember Me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-btn" type="submit">Login</button>

        <p className="signup-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>
  );
}