"use client";
import React, { useState } from "react";
import LoginCss from "./page.module.css";
import Link from "next/link";

import { GoogleLogin } from "react-google-login";

const GoogleAuth = ({ onSuccess }) => {
  const googleClientId = "YOUR_GOOGLE_CLIENT_ID";

  const handleGoogleLogin = async (googleResponse) => {
    try {
      const { tokenId } = googleResponse;
      await axios.post("/api/google-login", { idToken: tokenId });
      onSuccess(); // Redirect or perform other actions on successful login
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <GoogleLogin
      clientId={googleClientId}
      buttonText="Login with Google"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Perform your login API request using email and password
      const response = await axios.post("http://localhost:7000/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleSuccess = () => {
    // Handle successful login, e.g., redirect to dashboard
  };

  return (
    <div>
      <h1>Login</h1>

      <div className={LoginCss.login_full_div}>
        <form className={LoginCss.form_div}>
          <input
            className={LoginCss.single_input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={LoginCss.single_input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className={LoginCss.login_button}>
            Login
          </button>
          <GoogleAuth onSuccess={handleSuccess} />
        </form>
        <Link href="/dashboard/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
