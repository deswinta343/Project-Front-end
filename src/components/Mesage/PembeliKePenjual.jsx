import React, { useState } from "react";
import axios from 'axios';
import { Label } from "reactstrap";
// import './Register.css';

function RegisterPenjual() {
  const [nama_pengirim, setNama_Pengirim] = useState("");
  const [email_pengirim, setEmail_Pengirim] = useState("");
  const [pesan, setPesan] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama_pengirim === "" || email_pengirim === "" || pesan === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/addmessagepembeli', {
            nama_pengirim: nama_pengirim,
            email_pengirim: email_pengirim,
            pesan: pesan,
        });
        window.location.href = 'messagelist';
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
          <h3 className="text-center">Notification</h3>
          <div className="mb-2">
            <label htmlFor="nama_pengirim">Name</label>
            <input
              type="text"
              name="nama_pengirim"
              placeholder="Enter Your Name"
              className="form-control"
              value={nama_pengirim}
              onChange={(e) => setNama_Pengirim(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email_pengirim">Email</label>
            <input
              type="text"
              name="email_pengirim"
              placeholder="Enter Your Email"
              className="form-control"
              value={email_pengirim}
              onChange={(e) => setEmail_Pengirim(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="pesan">Message</label>
            <input
              type="text"
              name="pesan"
              placeholder="Enter Your Message"
              className="form-control"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
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