import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Product({
  id,
  image,
  details,
  title,
  price
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
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{`Price: $${price}`}</Card.Text>
        <Card.Link as={Link} to={`/product/${id}`}>Buy</Card.Link>
      </Card.Footer>
    </Card>
  );
}