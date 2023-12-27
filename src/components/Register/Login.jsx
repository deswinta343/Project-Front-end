import React, { useState } from "react";
import axios from 'axios';
import { Label } from "reactstrap";
import './Register.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/addregister', {
          email: email,
          password: password,
        });
        window.location.href = 'dataregister';
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle errors as needed
      }
    }
  };

  return (

    <div className="register template d-flex justify-content-center align-items-
center vh-100">

      <div className="form_container p-10 rounded bg-white shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>
          <div className="mb-3">
            <label htmlFor="email">User Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
export default Login;