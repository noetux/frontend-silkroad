import React from 'react';
import CustomNavBar from '../components/navigation/CustomNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import About from '../components/about/About';
import Products from '../components/products/Products';
import NotFound from '../components/NotFound/NotFound';
import ProductDetail from './ProductDetail/ProductDetail';
import Cart from '../components/cart/Cart';

export default function Layout() {
  return (
    <>
      <Router>
        <CustomNavBar/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}