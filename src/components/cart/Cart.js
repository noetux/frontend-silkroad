import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from '../../axios';
import CartItem from './CartItem';

export default function Cart() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = localStorage.getItem('cartItems') || [];
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    cartItems.forEach((e, i) => {

      console.log(`buscando el ${e}`);

      axios.get(`/character/${e}`).then(response => {
        setItems (i => [...i, <CartItem
          id = {e}
          title = {response.data.name}
          image = {response.data.image}
          price = "50.00"
          quantity = {1}
          key = {e}
        />]);
      });
    });
    //setItems(cartItems);
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