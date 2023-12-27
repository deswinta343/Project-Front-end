import React, { useState } from "react";
import axios from 'axios';
import { Label } from "reactstrap";
import './Register.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [alamat, setAlamat] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || number === "" || alamat === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/addregister', {
          email: email,
          password: password,
          number: number,
          alamat: alamat
        });
        window.location.href = 'home';
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle errors as needed
      }
    }
  };

  return (

    <div className="register template d-flex justify-content-center align-items-
center vh-100">

      <div className="form_container p-5 rounded bg-white shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
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
          <div className="mb-2">
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
          <div className="mb-2">
            <label htmlFor="number">Nomor HP</label>
            <input
              type="number"
              name="number"
              placeholder="Enter Your Number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              name="alamat"
              placeholder="Enter Your place"
              className="form-control"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="custom-control-checkbox"
              id="check"
            />
            {/* <Label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </Label> */}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {/* <p className="text-end mt-2">

            Forgot? <a href="">Password</a><a href="" className="ms-2">Sign

              in</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
export default Register;