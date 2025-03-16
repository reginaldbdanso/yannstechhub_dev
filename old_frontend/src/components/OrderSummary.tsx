import React from 'react';
import { OrderItems } from './OrderItems';
import { CartSummary } from './CartSummary';

export const OrderSummary = () => {
  return (
    <div className="w-full max-md:mt-9">
      <OrderItems />
      <CartSummary />
    </div>
  );
};
