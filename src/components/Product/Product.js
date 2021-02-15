import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Product({
  id,
  image,
  details,
  title,
  price,
  showBuy
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
    console.log(`quantity: ${quantity}`);
  }, []);

  const onBuy = () => {
    let cartItems = localStorage.getItem('cartItems') || {};
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    // cartItems = cartItems.concat(id);
    console.log(cartItems[id]);
    cartItems = {
      ...cartItems,
      [id]: quantity
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems);
  };

  return (
    <Card
      bg="dark"
      text="white"
      style={{width: '18rem', textAlign: 'center'}}
      className="my-2 mx-2"
    >
      <Card.Header>
        <Link to={`/product/${id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>{title}</Link>
      </Card.Header>
      <Card.Body>
        <Link to={`/product/${id}`}>
          <Image src={image} height='150px' className="mb-3" />
        </Link>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{`Price: $${price}`}</Card.Text>
        {showBuy ?
          <>
            <Form.Control
              type="number"
              className="mb-2"
              block="true"
              value={quantity}
              onChange={(e) => {
                if (+e.target.value > 0) setQuantity(+e.target.value);
              }}
            />
            <Button onClick={onBuy} variant="outline-success" block="true" >
              {isOnCart ? 'Modify Cart' : 'Add to cart'}
            </Button>
          </>
          :
          <Button as={Link} to={`/product/${id}`} variant="outline-info">Details</Button>
        }
      </Card.Footer>
    </Card>
  );
}