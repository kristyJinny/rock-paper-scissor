import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(()=> {
    getProducts()
  },[])
  return (
    <div className="mall-container">
      <ProductCard />
    </div>
  );
}

export default ProductAll;
