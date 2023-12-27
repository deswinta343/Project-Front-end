import React from "react";

// Mengimpor modul React dari pustaka React.

const Helmet = (props) => {
  // Deklarasi komponen functional Helmet dengan satu properti (props).

  document.title = "Rent Car Service - " + props.title;
  // Mengubah judul dokumen menjadi "Rent Car Service - " diikuti dengan nilai dari properti 'title'.

  return <div className="w-100">{props.children}</div>;
  // Mengembalikan elemen div dengan kelas CSS 'w-100' dan memuat elemen-elemen anak (children) dari komponen ini.
};

export default Helmet;
// Mengekspor komponen Helmet agar dapat digunakan di komponen-komponen lain.
