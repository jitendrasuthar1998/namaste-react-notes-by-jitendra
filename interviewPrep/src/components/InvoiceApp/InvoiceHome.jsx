import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const InvoiceHome = () => {
  return (
    <div>
        <h1>See your bills and expenses from here</h1>
        <ul>
            <li><Link to={"/bills"}>Bills</Link></li>
            <li><Link to={"/expenses"}>Expenses</Link></li>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}

export default InvoiceHome