import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import FormPage from "../components/Form";
import Register from "../components/Register/Register";
import RegisterPenjual from "../components/Register/RegisterPenjual";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataRegister from "../components/Admin/DataRegister";
import Login from "../components/Register/Login";
import Slidebar from "../components/Admin/Slidebar";
import Dashboard from "../components/Admin/Dashboard";
import DataPenjual from "../components/Admin/DataPenjual";
import PenjualKePembeli from "../components/Mesage/PenjualKePembeli";
import PembeliKePenjual from "../components/Mesage/PembeliKePenjual";
import MessageList from "../components/Mesage/MessageList";
// import Slidebar from "../components/Admin/Slidebar";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerpenjual" element={<RegisterPenjual />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/datapenjual" element={<DataPenjual />} />
      <Route path="/dataregister" element={<DataRegister />} />
      {/* <Route path="/slidebar" element={<Slidebar />} /> */}
      {/* <Route exact path="/form" element={<FormPage />} /> */}
      <Route path="*" element={<NotFound />} />

      <Route path="/dataregister" element={<DataRegister />} />
      <Route path="/slidebar" element={<Slidebar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messagepembeli" element={<PembeliKePenjual />} />
      <Route path="/messagepenjual" element={<PenjualKePembeli />} />
      <Route path="/messagelist" element={<MessageList />} />
    </Routes>
  );
};

export default Routers;
