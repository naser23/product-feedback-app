import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, username, email, password, confirmPassword } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="auth">
      <div className="auth-container">
        <h1>Register</h1>
        <form className="form-control" onSubmit={onSubmit}>
          <input
            className="input-field"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={onChange}
            required
          />
          <input
            className="input-field"
            type="text"
            id="username"
            placeholder="Enter a username"
            value={username}
            onChange={onChange}
            required
          />
          <input
            className="input-field"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={onChange}
            required
          />
          <input
            className="input-field"
            type="password"
            id="confirmPassword"
            placeholder="confirm your password"
            value={confirmPassword}
            onChange={onChange}
            required
          />
          <button className="submit">Register!</button>
          <p className="signUp" onClick={() => navigate("/login")}>
            Have an account? Log in here!
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
