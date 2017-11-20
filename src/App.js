import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const shoppingListItemTypes = PropTypes.shape({
  name: PropTypes.string,
  qty: PropTypes.number
});

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

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(shoppingListItemTypes)
};

ShoppingList.defaultProps = {
  items: []
};

const ShoppingListItem = ({ name, qty }) => (
  <li>{qty} x {name}</li>
);

ShoppingListItem.propTypes = shoppingListItemTypes;

ShoppingListItem.defaultProps = {
  qty: 0
};
