import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Product id is {productId}</div>;
};

export default ProductDetails;
