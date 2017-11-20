import React from 'react';
import './App.css';

const shoppingList = [
  { name: 'Milk', qty: 1 },
  { name: 'Coke', qty: 2 },
  { name: 'Flower', qty: 3 },
  { name: 'Bread', qty: 4 }
];

export default function App() {
  return (
    <div className="App">
      <ShoppingList items={shoppingList} />
    </div>
  );
}

const ShoppingList = ({ items }) => (
  <ul>
    {items.map((item) => <ShoppingListItem key={item.name} name={item.name} qty={item.qty} />)}
  </ul>
);

const ShoppingListItem = ({ name, qty }) => (
  <li>{qty} x {name}</li>
);
