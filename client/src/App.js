import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        
        <AppNavbar/>
        <Container>
          <ItemModel/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
