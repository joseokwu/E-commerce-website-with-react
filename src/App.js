import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import AuthWrapper from './pages/AuthWrapper';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
  PrivateRoute,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id' children={<SingleProduct />} exact />
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <PrivateRoute path='/checkout' exact>
            <Checkout />
          </PrivateRoute>
          <Route>
            <Error path='*' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
