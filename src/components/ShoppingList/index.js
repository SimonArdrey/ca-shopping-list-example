import React from 'react';
import ShoppingListItem from '../ShoppingListItem'

export default ({ items }) => {
  return (
    <ul>
      {items.map((item) => <ShoppingListItem key={item.name} {...item} />)}
    </ul>
  );
};
