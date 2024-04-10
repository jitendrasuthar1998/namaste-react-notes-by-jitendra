import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoice from './Bill';
import InvoiceHome from './InvoiceHome';
import Bills from './Bills';
import Bill from './Bill';
import Expenses from './Expenses';

const InvoiceApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InvoiceHome />}>
          <Route path='/bills' element={<Bills />}>
            <Route path='/bills/:billId' element={<Bill />} />
          </Route>
          <Route path='/expenses' element={<Expenses/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default InvoiceApp;
