// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react';
// import { Modal, Form, Button, ModalTitle, ModalBody } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// function DataPenjual() {
//   const [DataPenjual, setDataPenjual] = useState([]);
//   const [id, setId] = useState([]);
//   const [nama_showroom, setNama_Showroom] = useState([]);
//   const [email_showroom, setEmail_Showroom] = useState([]);
//   const [alamat_showroom, setAlamat_Showroom] = useState([]);
//   const [number_showroom, setNumber_Showroom] = useState([]);
//   const [password_penjual, setPassword_Penjual] = useState([]);
//   const [show, setShow] = useState([]);

//   const GetDataPenjual = async () => {
//     const getData = await axios.get(
//       'http://localhost:8080/datapenjual'
//     );
//     setDataPenjual(getData.data.data);
//     console.log(getData);

//   };
//   useEffect(() => {
//     GetDataPenjual();
//   }, []);

//   const updateakunpenjual = async (event) => {
//     event.preventDefault();
//     try {
//       const putData = await axios.put(

//         `http://localhost:8080/updateakunpenjual/${id}`,
//         {

//           nama_showroom: nama_showroom,
//           email_showroom: email_showroom,
//           alamat_showroom: alamat_showroom,
//           number_showroom: number_showroom,
//           password_penjual: password_penjual,
//         });
//       alert(putData.data.messages)
//       window.location.reload();
//     } catch (error) {
//       alert("Data Gagal diubah")
//     }
//   }
//   useEffect(() => {
//     GetDataPenjual();
//   }, []);

//   const showModal = (data) => {
//     setId(data.id);
//     setNama_Showroom(data.nama_showroom);
//     setEmail_Showroom(data.email_showroom);
//     setAlamat_Showroom(data.alamat_showroom);
//     setNumber_Showroom(data.number_showroom);
//     setPassword_Penjual(data.password_penjual);
//     setShow(true);
//   }
//   const closeModal = () => {
//     setId("");
//     setNama_Showroom("");
//     setEmail_Showroom("");
//     setAlamat_Showroom("");
//     setNumber_Showroom("");
//     setPassword_Penjual("");
//     setShow(false);
//   }
//   const [showDelete, setShowDelete] = useState(false);

//   const showModalDelete = (data) => {
//     setId(data.id);
//     setNama_Showroom(data.nama_showroom);
//     setEmail_Showroom(data.email_showroom);
//     setAlamat_Showroom(data.alamat_showroom);
//     setNumber_Showroom(data.number_showroom);
//     setPassword_Penjual(data.password_penjual);
//     setShowDelete(true); // Perbarui ke setShowDelete
//   };

//   const closeModalDelete = () => {
//     setId("");
//     setNama_Showroom("");
//     setEmail_Showroom("");
//     setAlamat_Showroom("");
//     setNumber_Showroom("");
//     setPassword_Penjual("");
//     setShowDelete(false); // Perbarui ke setShowDelete
//   };

//   const deleteakunpenjual = async (event) => {
//     event.preventDefault();
//     try {
//       const deleteData = await axios.delete(
//         `http://localhost:8080/deleteakunpenjual/${id}`); // Ganti kutip tunggal menjadi tanda kutip ganda
//       alert(deleteData.data.messages);
//       window.location.reload();
//     } catch (error) {
//       alert("data gagal dihapus");
//     }
//   };

//   return (
//     <div className='body-flex'>
//       <div className="flex">
//         <div className='col-12 p-4'>
//           <Modal show={show} onHide={closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Form Update Data</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit={updateakunpenjual}>
//                 <Form.Group className="mb-3"
//                   controlId="exampleForm.ControlInput1">
//                   <Form.Label>Nama Showroom</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setNama_Showroom(e.target.value)}
//                     value={nama_showroom}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3"
//                   controlId="exampleForm.ControlInput1">
//                   <Form.Label>Alamat Showroom</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setAlamat_Showroom(e.target.value)}
//                     value={alamat_showroom}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3"
//                   controlId="exampleForm.ControlInput1">
//                   <Form.Label>Nomor</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setNumber_Showroom(e.target.value)}
//                     value={number_showroom}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3"
//                   controlId="exampleForm.ControlInput1">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setPassword_Penjual(e.target.value)}
//                     value={password_penjual}
//                   />
//                 </Form.Group>
//                 <Button type='submit' color="primary"
//                   className="px-4" onClick={updateakunpenjual}>
//                   Update
//                 </Button>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={closeModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//           <h1 className="py-1">Data User</h1>
//           <Modal show={showDelete} onHide={closeModalDelete}>
//             <Modal.Header closeButton>
//               <Modal.Title>
//                 Apakah anda yakin menghapus data ini?
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="col-sm-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-tittle">Detail Data</h5>
//                     <div className="row">
//                       <p className="col-4 card-text">
//                         Nama Showroom
//                       </p>
//                       <p className="col-6 card-text">
//                         : {nama_showroom}
//                       </p>
//                       <p className="col-4 card-text">
//                         Email Showroom
//                       </p>
//                       <p className="col-6 card-text">
//                         : {email_showroom}
//                       </p>
//                       <p className="col-4 card-text">
//                         Alamat Showroom
//                       </p>
//                       <p className="col-6 card-text">
//                         : {alamat_showroom}
//                       </p>
//                       <p className="col-4 card-text">
//                         Nomor
//                       </p>
//                       <p className="col-6 card-text">
//                         : {number_showroom}
//                       </p>
//                       <p className="col-4 card-text">
//                         Password Akun
//                       </p>
//                       <p className="col-6 card-text">
//                         : {password_penjual}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button type='submit' color="primary" className="px-4" onClick={deleteakunpenjual}>
//                 Hapus Data
//               </Button>
//               <Button variant="danger" onClick={closeModalDelete}>Batal</Button>
//         </Modal.Footer>
//       </Modal>
//       <CCard className="mb-4">
//         <CCardHeader>
//           <strong>Tabel User</strong>
//         </CCardHeader>
//         <CCardBody>
//           <CTable striped>
//             <CTableHead>
//               <CTableRow>
//                 <CTableHeaderCell scope="col">Nama Showroom</CTableHeaderCell>
//                 <CTableHeaderCell scope="col">Email Showroom</CTableHeaderCell>
//                 <CTableHeaderCell scope="col">Alamat Showroom</CTableHeaderCell>
//                 <CTableHeaderCell scope="col">Number Showroom</CTableHeaderCell>
//                 <CTableHeaderCell scope="col">Password Akun</CTableHeaderCell>
//                 <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
//               </CTableRow>
//             </CTableHead>
//             <CTableBody>
//               {DataPenjual.map((item, index) => (
//                 <CTableRow key={index}>
//                   <CTableDataCell>{item.nama_showroom}</CTableDataCell>
//                   <CTableDataCell>{item.email_showroom}</CTableDataCell>
//                   <CTableDataCell>{item.alamat_showroom}</CTableDataCell>
//                   <CTableDataCell>{item.number_showroom}</CTableDataCell>
//                   <CTableDataCell>{item.password_penjual}</CTableDataCell>
//                   <CTableDataCell>
//                     <CButton className='btn btn-primary text-white me-2' onClick={() => showModal(item)}>
//                       Edit
//                     </CButton>

//                     <CButton className='btn btn-danger text-white' onClick={() => showModalDelete(item)}>
//                       Hapus
//                     </CButton>

//                   </CTableDataCell>
//                 </CTableRow>
//               ))}
//             </CTableBody>
//           </CTable>
//         </CCardBody>
//       </CCard>
//     </div>

//       </div >
//     </div >
//   );
// }

// export default DataPenjual;