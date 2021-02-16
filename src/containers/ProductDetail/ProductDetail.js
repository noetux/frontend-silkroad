import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from '../../axios';
import ProductDetails from '../../components/Product/ProductDetails';

export default function ProductDetail(props) {
  const productId = +props.match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/character/${productId}`).then(response => {
      setProduct({
        key: response.data.id,
        id: response.data.id,
        title: response.data.name,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a dui sollicitudin, porttitor dolor eu, consectetur urna. Sed sit amet elementum nulla. Vestibulum vel erat lorem.",
        image: response.data.image,
        price: "50.00"
      });
    });
    
  }, []);

  let objectInfo = <div style={{textAlign: "center"}}><h1>Product not found...</h1></div>;
  if (Object.entries(product).length !== 0) {
    objectInfo = <ProductDetails
      id={product.id}
      title={product.title}
      description={product.details}
      details={['detail 1', 'detail 2', 'detail 3']}
      image={product.image}
      price={product.price}
      showDetails={true}
    />
  }

  return (
    <Container fluid>
    <Row style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      {objectInfo}
    </Row>
  </Container>
  );

}