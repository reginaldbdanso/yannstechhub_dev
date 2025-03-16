import React from 'react';

export const CartSummary = () => {
  return (
    <section className="px-10 pt-7 pb-12 mt-7 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-base font-medium text-black max-md:mt-10">
            <h3 className="self-stretch">Cart Summmary</h3>
            <p className="mt-6">Shipping</p>
            <p className="mt-9 text-2xl font-bold">Total</p>
          </div>
        </div>
        <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-base font-bold text-black whitespace-nowrap max-md:mt-10">
            <p>$349.99</p>
            <p className="self-start mt-6">$5.00</p>
            <p className="mt-12 max-md:mt-10">$354.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};
