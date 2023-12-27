import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { Modal, Form, Button, ModalTitle, ModalBody } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function DataRegister() {
  const [DataRegister, setDataRegister] = useState([]);
  const [id, setId] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [number, setNumber] = useState([]);
  const [alamat, setAlamat] = useState([]);
  const [show, setShow] = useState([]);

  const GetDataRegister = async () => {
    const getData = await axios.get(
      'http://localhost:8080/data'
    );
    setDataRegister(getData.data.data);
    console.log(getData);

  };
  useEffect(() => {
    GetDataRegister();
  }, []);

  const updateUser = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(

        `http://localhost:8080/update-register/${id}`,
        {

          email: email,
          password: password,
          number: number,
          alamat: alamat
        });
      alert(putData.data.messages)
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah")
    }
  }
  useEffect(() => {
    GetDataRegister();
  }, []);

  const showModal = (data) => {
    setId(data.id);
    setEmail(data.email);
    setPassword(data.password);
    setNumber(data.number);
    setAlamat(data.alamat);
    setShow(true);
  }
  const closeModal = () => {
    setId("");
    setEmail("");
    setPassword("");
    setNumber("");
    setAlamat("");
    setShow(false);
  }
  const [showDelete, setShowDelete] = useState(false);

  const showModalDelete = (data) => {
    setId(data.id);
    setEmail(data.email);
    setPassword(data.password);
    setNumber(data.number);
    setAlamat(data.alamat);
    setShowDelete(true); // Perbarui ke setShowDelete
  };

  const closeModalDelete = () => {
    setId("");
    setEmail("");
    setPassword("");
    setNumber("");
    setAlamat("");
    setShowDelete(false); // Perbarui ke setShowDelete
  };

  const DeleteDataRegister = async (event) => {
    event.preventDefault();
    try {
      const deleteData = await axios.delete(
        `http://localhost:8080/delete-register/${id}`); // Ganti kutip tunggal menjadi tanda kutip ganda
      alert(deleteData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("data gagal dihapus");
    }
  };

  return (
    <div className='body-flex'>
      <div className="flex">
        <div className='col-12 p-4'>
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={updateUser}>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1">
                  <Form.Label>Nomor HP</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                </Form.Group>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setAlamat(e.target.value)}
                    value={alamat}
                  />
                </Form.Group>
                <Button type='submit' color="primary"
                  className="px-4" onClick={updateUser}>
                  Update
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <h1 className="py-1">Data User</h1>
          <Modal show={showDelete} onHide={closeModalDelete}>
            <Modal.Header closeButton>
              <Modal.Title>
                Apakah anda yakin menghapus data ini?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-tittle">Detail Data</h5>
                    <div className="row">
                      <p className="col-4 card-text">
                        Email user
                      </p>
                      <p className="col-6 card-text">
                        : {email}
                      </p>
                      <p className="col-4 card-text">
                        Password
                      </p>
                      <p className="col-6 card-text">
                        : {password}
                      </p>
                      <p className="col-4 card-text">
                        Nomor HP
                      </p>
                      <p className="col-6 card-text">
                        : {number}
                      </p>
                      <p className="col-4 card-text">
                        Alamat
                      </p>
                      <p className="col-6 card-text">
                        : {alamat}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type='submit' color="primary" className="px-4" onClick={DeleteDataRegister}>
                Hapus Data
              </Button>
              <Button variant="danger" onClick={closeModalDelete}>Batal</Button>
        </Modal.Footer>
      </Modal>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Tabel User</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nomor</CTableHeaderCell>
                <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {DataRegister.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{item.email}</CTableDataCell>
                  <CTableDataCell>{item.password}</CTableDataCell>
                  <CTableDataCell>{item.number}</CTableDataCell>
                  <CTableDataCell>{item.alamat}</CTableDataCell>
                  <CTableDataCell>
                    <CButton className='btn btn-primary text-white me-2' onClick={() => showModal(item)}>
                      Edit
                    </CButton>
                    <CButton className='btn btn-danger text-white' onClick={() => showModalDelete(item)}>
                      Hapus
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
      </div >
    </div >
  );
}

export default DataRegister;