import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        <li><Link to={"/products/1"}>Product 1</Link></li>
        <li><Link to={"/products/2"}>Product 2</Link></li>
        <li><Link to={"/products/3"}>Product 3</Link></li>
        <li><Link to={"/products/4"}>Product 4</Link></li>
        <li><Link to={"/products/5"}>Product 5</Link></li>
      </ul>
    </div>
  )
}

export default Products