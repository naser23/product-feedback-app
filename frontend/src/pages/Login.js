import React from "react";

function Login() {
  return (
    <main className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form className="form-control">
          <input
            className="input-field"
            type="text"
            id="email"
            placeholder="Enter your email"
          />
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="submit">Login to your account</button>
          <p>Dont have an account? Sign up here!</p>
        </form>
      </div>
    </main>
  );
}

export default Login;
