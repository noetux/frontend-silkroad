import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from '../../axios';
import ProductDetails from '../Product/ProductDetails';

export default function Cart() {

  const [items, setItems] = useState([]);

  const fillCart = async () => {
    let cartItems = localStorage.getItem('cartItems') || {};
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    for (var [key, value] of Object.entries(cartItems)) {
      let response = await axios.get(`/character/${key}`);
      setItems (i => [...i, <ProductDetails
        id={key}
        title={response.data.name}
        image={response.data.image}
        price="50.00"
        showDetails={false}
      />]);
    }
  }

  useEffect(() => {
    fillCart();
  }, []);

  return (
    <>
      <h1 className="text-center my-2">Cart</h1>
      <Container>
        <Row style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {items}
        </Row>
      </Container>
    </>
  );
}