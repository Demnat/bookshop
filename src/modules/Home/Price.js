import React from 'react';

const Price = ({price}) => (price === undefined)? "" : price.toLocaleString("pl-PL", {style:"currency",currency:"PLN"});

export default Price;