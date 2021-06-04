import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Bag from './components/Bag';
import SearchForm from './components/SearchForm';

import Home from './pages/Home';
import FilteredProduct from './pages/FilteredProduct';
import FocusedProductCart from './pages/FocusedProductCart';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Bag />
      <SearchForm />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:name'>
          <FilteredProduct />
        </Route>

        <Route exact path='/:name/:id'>
          <FocusedProductCart />
        </Route>

        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
