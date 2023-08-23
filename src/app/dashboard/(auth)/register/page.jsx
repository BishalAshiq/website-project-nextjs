"use client";
import React, { useState } from "react";
import RegisterCss from "./page.module.css";

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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    try {
      // Perform your registration API request using name, email, and password
      const response = await axios.post("http://localhost:7000/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  const handleSuccess = () => {
    // Handle successful registration, e.g., show success message
  };

  return (
    <div className={RegisterCss.register_full_div}>
      <div className={RegisterCss.register_div}>
        <h1 className="mb-6 font-bold text-xl/10">Register</h1>
        <form className={RegisterCss.register_form}>
          <input
            className={RegisterCss.single_inputs}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={RegisterCss.single_inputs}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={RegisterCss.single_inputs}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={RegisterCss.single_inputs}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <button onClick={handleRegistration}>Register</button> */}
          <div>
            <GoogleAuth
              onSuccess={handleSuccess}
              className={RegisterCss.google_button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
