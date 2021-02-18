import classes from './Product.module.css';
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
}) {
  return (
    <Card
      bg="dark"
      text="white"
      className={`my-2 mx-2 ${classes.card}`}
    >
      <Card.Header>
        <Link to={`/product/${id}`} className={classes.title}>{title}</Link>
      </Card.Header>
      <Card.Body>
        <Link to={`/product/${id}`}>
          <Image src={image} height='150px' className="mb-3" />
        </Link>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{`Price: $${price}`}</Card.Text>
        <Button as={Link} to={`/product/${id}`} variant="outline-info">Details</Button>
      </Card.Footer>
    </Card>
  );
}