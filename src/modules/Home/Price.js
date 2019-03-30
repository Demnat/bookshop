import React from 'react';

const Price = ({price}) => (price === undefined)? "" : Number(price.toFixed(2)).toLocaleString("pl-PL", {style:"currency",currency:"PLN"});

export default Price;