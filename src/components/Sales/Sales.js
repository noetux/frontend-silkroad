import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from '../Product/Product';
import axios from '../../axios';

export default function Sales({ salesProducts }) {

  const [products, setProducts] = useState({
    products: []
  });

  useEffect(() => {
    axios.get('/character')
      .then(response => {
        let charactersInfo = response.data.results;
        charactersInfo = charactersInfo.map(character => ({
          id: character.id,
          name: character.name,
          image: character.image,
        }));
        setProducts({ products: [...charactersInfo] });
      });
  }, []);

  const productsCards = products.products.map((c, i) => {
    return <Product
      id={c.id}
      title={c.name}
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a dui sollicitudin, porttitor dolor eu, consectetur urna. Sed sit amet elementum nulla. Vestibulum vel erat lorem."
      image={c.image}
      price="50.00"
      key={c.id}
      showBuy={false}
    />
  });

  return (
    <Container fluid>
      <Row style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {productsCards}
      </Row>
    </Container>
  );
}