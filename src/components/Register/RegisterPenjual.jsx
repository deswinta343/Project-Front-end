import React, { useState } from "react";
import axios from 'axios';
import { Label } from "reactstrap";
import './Register.css';

function RegisterPenjual() {
  const [nama_showroom, setNama_Showroom] = useState("");
  const [email_showroom, setEmail_Showroom] = useState("");
  const [alamat_showroom, setAlamat_Showroom] = useState("");
  const [number_showroom, setNumber_Showroom] = useState("");
  const [password_penjual, setPassword_Penjual] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama_showroom === "" || email_showroom === "" || alamat_showroom === "" || number_showroom === "" || password_penjual === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/registerpenjual', {
            nama_showroom: nama_showroom,
            email_showroom: email_showroom,
            alamat_showroom: alamat_showroom,
            number_showroom: number_showroom,
            password_penjual: password_penjual,
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
            <label htmlFor="nama_showroom">Nama Showroom</label>
            <input
              type="text"
              name="nama_showroom"
              placeholder="Enter Your Name"
              className="form-control"
              value={nama_showroom}
              onChange={(e) => setNama_Showroom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email_showroom">Email</label>
            <input
              type="text"
              name="nama_shworoom"
              placeholder="Enter Your Email"
              className="form-control"
              value={email_showroom}
              onChange={(e) => setEmail_Showroom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="alamat_showroom">Alamat</label>
            <input
              type="text"
              name="alamat_showroom"
              placeholder="Enter Your Place"
              className="form-control"
              value={alamat_showroom}
              onChange={(e) => setAlamat_Showroom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="number_showroom">Nomor</label>
            <input
              type="text"
              name="number_showroom"
              placeholder="Enter Your Number"
              className="form-control"
              value={number_showroom}
              onChange={(e) => setNumber_Showroom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password_showroom">Password</label>
            <input
              type="text"
              name="password_showroom"
              placeholder="Enter Your Password"
              className="form-control"
              value={password_penjual}
              onChange={(e) => setPassword_Penjual(e.target.value)}
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
export default RegisterPenjual;