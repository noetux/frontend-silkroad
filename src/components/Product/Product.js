import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function Product({
  id,
  image,
  details,
  title,
  price,
  showBuy
}) {

  const onBuy = () => {
    let cartItems = localStorage.getItem('cartItems') || [];
    console.log(cartItems);
    cartItems = typeof cartItems === 'string' ? JSON.parse(cartItems) : cartItems;
    console.log(typeof []);
    console.log(typeof cartItems);
    cartItems = cartItems.concat(id);
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // console.log(cartItems);
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
          <Button onClick={onBuy} variant="outline-success" >Add to cart</Button>
          :
          <Button as={Link} to={`/product/${id}`} variant="outline-info">Details</Button>
        }
      </Card.Footer>
    </Card>
  );
}