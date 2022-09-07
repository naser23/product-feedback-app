import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
        <h1>Login</h1>
        <form className="form-control" onSubmit={onSubmit}>
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
          <button className="submit">Login to your account</button>
          <p className="signUp" onClick={() => navigate("/register")}>
            Dont have an account? Sign up here!
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
