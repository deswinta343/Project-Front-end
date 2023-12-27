import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Slidebar() {
  return (
    <div>
      <div>
        <i className='bi bi-clipboard-data bi-2x my-2'></i>
        <span className='brand-name fs-4'>ADMIN AUTO PRESTIGE</span>
      </div>

      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <Link to="/dashboard" className='list-group-item list-group-item-action my-2'>
          <i className='bi bi-speedometer2'></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/dataregister" className='list-group-item list-group-item-action my-2'>
          <i className='bi bi-house'></i>
          <span>Data Customer</span>
        </Link>
        <Link to="/datapenjual" className='list-group-item list-group-item-action my-2'>
          <i class="bi bi-person-rolodex"></i>
          <span>Data Showroom</span>
        </Link>
      </div>
    </div>
  );
}

export default Slidebar;
