import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';


const ProductAll = () => {
  let [products, setProducts] = useState([]);

  const getProducts = async () => {
    // let url = `http://localhost:4001/products`;
    let url = `https://my-json-server.typicode.com/kristyJinny/rock-paper-scissor/products`;
    // let url = `https://my-json-server.typicode.com/kristyJinny/jinny-mall/products`;
    
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProducts(data);
  }

  useEffect(()=> {
    getProducts()
  },[])

  return (
    <div className="mall-container">
      <Row>
        {products.map((item) => {
          return <Col md={3}>
          <ProductCard item={item} />
        </Col>
        })}
      </Row>
    </div>
  );
}

export default ProductAll;
