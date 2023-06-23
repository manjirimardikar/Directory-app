import React from 'react';
import './add.css';
import { Link, Outlet } from 'react-router-dom';

const Addata = () => {
  return (
    <>
      <div className='heading'>
        <h1 className='headh'>Directory App</h1>
      </div>
      <div className='buttonpart'>
        <Link to='/addata'><button>Add New Person</button></Link>
        <Link to='/retrieve'><button>Retrieve Information</button></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Addata;