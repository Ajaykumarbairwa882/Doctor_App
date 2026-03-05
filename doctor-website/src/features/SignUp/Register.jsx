import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.role) {
      newErrors.role = "Select role";
    }

    if (!form.password) {
      newErrors.password = "Password required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful");
    }
    console.log(">>>", form);

    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="page register-page">
      <h1>Create Account</h1>

      <p className="register-text">
        Register to book appointments and access hospital services.
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option>Patient</option>
          <option>Doctor</option>
        </select>
        {errors.role && <span className="error">{errors.role}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}

        <button className="register-btn">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
