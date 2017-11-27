import React from 'react';

export default ({ name, qty, inTrolly }) => (
  <li>{qty} x {name} {inTrolly ? <Tick /> : '' }</li>
);

const Tick = () => <span>&#x2714;</span>;
