import React from "react";
import ReactDOM from "react-dom/client";

// Mengimpor modul React dan ReactDOM dari pustaka React.

import "./index.css";
// Mengimpor file CSS bernama "index.css". Ini adalah gaya khusus untuk halaman ini.

import App from "./App";
// Mengimpor komponen App dari file bernama "App.js". Komponen ini adalah komponen utama dari aplikasi.

import "bootstrap/dist/css/bootstrap.min.css";
// Mengimpor file CSS dari Bootstrap. Ini adalah framework CSS yang digunakan untuk memperindah tata letak halaman web.

import "remixicon/fonts/remixicon.css";
// Mengimpor file CSS yang berisi ikon dari Remix Icons. Ikon ini mungkin digunakan di dalam komponen-komponen.

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Mengimpor file CSS dari library Slick Carousel. Ini adalah library untuk membuat slideshow atau carousel di halaman web.

import { BrowserRouter as Router } from "react-router-dom";
// Mengimpor komponen BrowserRouter dari pustaka react-router-dom. Ini digunakan untuk menangani routing di aplikasi React.

const root = ReactDOM.createRoot(document.getElementById("root"));
// Membuat akar (root) React di elemen dengan ID "root" di halaman HTML.

root.render(
  // Mem-render komponen ke dalam akar React.
  <React.StrictMode>
    {/* Mengaktifkan Strict Mode, yang membantu mendeteksi dan memperbaiki potensi masalah dalam aplikasi */}
    <Router>
      {/* Menggunakan Router untuk menangani routing dalam aplikasi */}
      <App />
      {/* Memasukkan komponen App ke dalam Router */}
    </Router>
  </React.StrictMode>
);
