import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from '../Product/Product';

export default function Sales({ salesProducts }) {

  let products = salesProducts.map((product, i) => {
    return <Product
      id={product.id}
      title={product.title}
      details={product.details}
      image={product.image}
      price={product.price}
      key={product.id}
    />;
  });

  return (
    <Container fluid>
      <Row>
        {products}
      </Row>
    </Container>
  );

}