import React, { useState } from "react";
import "./RegisterForm.css";
import axios from "axios";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    axios.post("http://localhost:5000/", {
      name: name,
      email: email,
      password: password,
    });
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="registerForm wrapper">
      <div className="registerForm__container">
        <div className="registerForm__container-title">
          <h1>Register Form</h1>
        </div>
        <div className="registerForm__container-info">
          <div className="registerForm__container-info-blog">
            <label>Name(*) :</label>
            <input
              value={name}
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="registerForm__container-info-blog">
            <label>Email(*) :</label>
            <input
              value={email}
              type="email "
              placeholder="username@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="registerForm__container-info-blog">
            <label>Password(*) :</label>
            <input
              value={password}
              type="password"
              placeholder="enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="registerForm__container-info-blog">
            <label>Profile Image:</label>
            <input type="file" />
          </div> */}
        </div>
        <div className="registerForm__container-submit">
          <button onClick={addUser}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
