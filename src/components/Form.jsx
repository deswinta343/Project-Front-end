import React, { useState } from "react";
import axios from 'axios';
import {
  CCard,
} from '@coreui/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function FormPage() {
  // Deklarasi variabel
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === "" || password === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/register/', {
          user: user,
          password: password
        });
        window.location.href = 'dataregister';  // Baris yang sudah diperbaiki
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error as needed
      }
    }
  };    
    
  return (
    <div className='body-flex'>
      <div className="flex">
        <div className='col-10 p-5'>
          <h1 className="py-1">Form Tambah Data Login</h1>
          <CCard className="mb-4 p-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="user"
                  autoFocus
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              
              <Button type="submit" className="col-12 px-4 btn btn-success">
                Submit
              </Button>
            </Form>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
