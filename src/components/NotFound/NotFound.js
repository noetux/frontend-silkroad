import notFoundImage from '../../assets/images/NotFound.png'
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  let location = useLocation();
  return (
    <div style={{textAlign: "center"}}>
      <img src={notFoundImage} alt="notfound" style={{height: "100px"}} />
      <h1>Not Found</h1>
      <h4>{location.pathname}</h4>
    </div>
  );
}