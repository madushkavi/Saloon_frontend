import React, { useState } from "react";
import axios from "axios"; // You need to install Axios if not already done

import "../styles/LoginSignup.css";
import user_icon from "../assets/user.png";
import email_icon from "../assets/envelope.png";
import password_icon from "../assets/lock.png";
import phone_icon from "../assets/phone-call.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male"); // Default to 'male'
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (action === "Login") {
      // Handle login here
      try {
        const response = await axios.post("http://your-api-endpoint/login", {
          email,
          password,
        });
        // Handle successful login, e.g., store user data in state or cookies
        console.log("Logged in:", response.data);
      } catch (error) {
        setError("Login failed. Please check your credentials.");
      }
    } else {
      // Handle registration here
      alert(name)
      try {
        const response = await axios.get("http://127.0.0.1:8000/register", {
          name,
          phone,
          email,
          password,
          gender,
        });
        // Handle successful registration, e.g., show a success message
        console.log(response.data);
      } catch (error) {
        setError("Registration failed. Please check your information.");
      }
    }
  };
  const handleForgotPassword = () => {
    // Implement the logic for resetting the password here.
    // You can show a modal or redirect the user to a password reset page.
    // This can involve sending a password reset email to the user, etc.
    // You may want to use a third-party library for password reset functionality.
  };
  

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" width="21px" height="21px" />
            <input
              type="text"
              className="inp"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
            />
          </div>
        )}
        {action === "Login" ? null : (
          <div className="input">
            <img src={phone_icon} alt="" width="21px" height="21px" />
            <input
              type="tel"
              className="inp"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              id="phone"
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" width="21px" height="21px" />
          <input
            type="email"
            className="inp"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {action === "Login" ? null : (
          <div className="input">
            <label htmlFor="gender" className="sex">
              Gender
            </label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              className="app-check"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <label className="radioinp">Male</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              className="app-check"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <label className="radioinp">Female</label>
            <div className="wid"></div>
          </div>
        )}

        <div className="input">
          <img src={password_icon} alt="" width="21px" height="21px" />
          <input
            type="password"
            className="inp"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {action === "Login" ? null : (
          <div className="already-registered">
            Already registered?{" "}
            <span onClick={() => setAction("Login")}> Login</span>
          </div>
        )}
        {action === "Login" ? (
  <div className="forgot-password">
    <span onClick={handleForgotPassword}>Forgot Password?</span>
  </div>
) : null}

        {error && <div className="error-box">{error}</div>}
        <div className="submit-container">
          <div>
            <button
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
