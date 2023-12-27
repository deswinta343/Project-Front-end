import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "./src/index.css";


function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the visibility to true after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`dashboard-container ${isVisible ? 'slide-in' : ''}`}>
      <div className='container-fluid bg-white'>
        <div className='row g-2 my-2'>
          <div className='md-2 p-1'>
            <div className='p-2 shadow-sm d-flex justify-content-around align-items-center rounded px-3 with-shadow'>
              <div>
                <h3 className='fs-2'>231</h3>
                <p className='fs-5'>Produk tersedia</p>
              </div>
              <i className='bi bi-cart-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className='md-2 p-2'>
            <div className='p-2 shadow-sm d-flex justify-content-around align-items-center rounded px-3 with-shadow'>
              <div>
                <h3 className='fs-2'>23</h3>
                <p className='fs-5'>Produk Terjual</p>
              </div>
              <i className='bi bi-currency-dollar p-3 fs-1'></i>
            </div>
          </div>
          <div className='md-2 p-2'>
            <div className='p-2 shadow-sm d-flex justify-content-around align-items-center rounded px-3 with-shadow'>
              <div>
                <h3 className='fs-2'>12.001</h3>
                <p className='fs-5'>Kunjungan website</p>
              </div>
              <i className='bi bi-people p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
