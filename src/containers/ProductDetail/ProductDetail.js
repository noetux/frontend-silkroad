import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import { temporalDB } from '../../temporalData/teporalDB';

export default function ProductDetail(props) {
  const productId = +props.match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = (temporalDB.filter(p => p.id === productId))[0] || {};
    setProduct({...foundProduct});
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
    />
  }

  return (
    <>
      {objectInfo}
    </>
  );

}