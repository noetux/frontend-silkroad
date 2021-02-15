import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from '../../components/Product/Product';
//import { temporalDB } from '../../temporalData/teporalDB';
import axios from '../../axios';

export default function ProductDetail(props) {
  const productId = +props.match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    // const foundProduct = (temporalDB.filter(p => p.id === productId))[0] || {};
    // setProduct({...foundProduct});
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
    objectInfo = <Product
      key={product.key}
      id={product.id}
      title={product.title}
      details={product.details}
      image={product.image}
      price={product.price}
      showBuy={true}
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