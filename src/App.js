import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList'

import './App.css';

const shoppingListInfo = [
  { id: 1, name: 'Milk', qty: 1, inTrolly: true },
  { id: 2, name: 'Coke', qty: 2, inTrolly: false },
  { id: 3, name: 'Flower', qty: 3, inTrolly: true },
  { id: 4, name: 'Bread', qty: 4, inTrolly: false },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList items={shoppingListInfo} />
      </div>
    );
  }
}
