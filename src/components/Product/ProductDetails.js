import classes from './ProductDetails.module.css';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ProductDetail({
  id,
  title,
  description,
  details,
  image,
  price,
  showDetails
}) {
  const [quantity, setQuantity] = useState(1);
  const [isOnCart, setIsOnCart] = useState(false);

  useEffect(() => {
    let cartItems = localStorage.getItem('cartItems') || {};
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    if (cartItems[id]) {
      setQuantity(cartItems[id]);
      setIsOnCart(true);
    }
  }, []);

  const onClick = () => {
    let cartItems = localStorage.getItem('cartItems') || {};
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    cartItems = {
      ...cartItems,
      [id]: quantity
    }
    setIsOnCart(true);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  const onRemove = () => {
    let cartItems = localStorage.getItem('cartItems') || {};
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    delete cartItems[id];
    setIsOnCart(false);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  return (
    <Card
      bg="dark"
      text="white"
      className="my-2 mx-2"
    >
      <Card.Header className={classes.title}>{title}</Card.Header>
      <Card.Body className={classes.cardBody}>
      <Image src={image} height='150px' className="my-3 mx-3" />
        {showDetails ?
          <div className={classes.description}>
            <Card.Text>{description}</Card.Text>
            <ul>
              {details.map((d, i) => <li>{d}</li>)}
            </ul>
          </div>
        : null}
      </Card.Body>
      <Card.Footer className={classes.footer}>
        <Card.Text>{`Unit price: $${price}`}</Card.Text>
        <div className="w-25">
          <Form.Control
            type="number"
            className="mb-2"
            block="true"
            value={quantity}
            onChange={(e) => {
              if (+e.target.value > 0) setQuantity(+e.target.value);
            }}
          />
        </div>
        
        <Button onClick={onClick} variant="outline-success" block="true" className="w-25" >
          {isOnCart ? 'Modify Cart' : 'Add to cart'}
        </Button>
        {isOnCart ?
          <Button onClick={onRemove} variant="outline-danger" block="true" className="w-25" >
            Remove from cart
          </Button>
        : null}
      </Card.Footer>
    </Card>
  );

}