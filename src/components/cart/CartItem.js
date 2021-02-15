import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CartItem({
  id,
  title,
  image,
  price,
  quantity
}) {

  return (
    <Card
      bg="dark"
      text="white"
      style={{width: '18rem', textAlign: 'center'}}
      className="my-2 mx-2"
    >
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <img src={image} height='150px' alt="product_image" />
      </Card.Body>
      <Card.Footer>
        <Card.Text>{`Quantity: ${quantity}`}</Card.Text>
        <Card.Text>{`Unit Price: $${price}`}</Card.Text>
        <Card.Text>{`Total: $${price * quantity}`}</Card.Text>
      </Card.Footer>
    </Card>
  );
}