import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Bills = () => {
  return (
    <div>
      <h1>Bills</h1>
      <p>Get bills details</p>
      <li>
        <Link to={'/bills/1'}>Bill 1</Link>
      </li>
      <li>
        <Link to={'/bills/2'}>Bill 2</Link>
      </li>
      <li>
        <Link to={'/bills/3'}>Bill 3</Link>
      </li>
      <li>
        <Link to={'/bills/4'}>Bill 4</Link>
      </li>
      <Outlet></Outlet>
    </div>
  );
};

export default Bills;
