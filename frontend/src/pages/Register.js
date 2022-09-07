import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const re = new RegExp(
    "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );

  const { name, username, email, password, confirmPassword } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const newUsername = re.exec(username);

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
    } else if (newUsername === null) {
      console.log(`Username: ${username} is invalid.`);
    } else {
      const userData = {
        name,
        username: "@" + newUsername[0],
        email,
        password,
      };
      dispatch(register(userData));
    }
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
