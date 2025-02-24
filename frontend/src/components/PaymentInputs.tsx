import React from 'react';

export const PaymentInputs: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex flex-wrap gap-7 px-8 py-3 text-xs font-medium bg-gray-100 rounded-3xl text-neutral-400 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce69dcc2453cb67f5a44979cb2576d08d6bad7912bcb64980c7929c66595eee0?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Card icon"
        />
        <input
          type="text"
          placeholder="Card Number"
          className="flex-auto my-auto bg-transparent"
        />
      </div>

      <div className="flex flex-wrap gap-1.5 mt-7 text-xs font-medium whitespace-nowrap text-neutral-400">
        <div className="flex flex-auto gap-6 px-8 py-2.5 bg-gray-100 rounded-3xl max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a65a278a0da5d09ab20645ec36d2c0e9ced12bf88c0dee87a7e2def1d1ada29a?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 w-7 aspect-square"
            alt="Calendar icon"
          />
          <input
            type="text"
            placeholder="Expiry"
            className="my-auto basis-auto bg-transparent"
          />
        </div>
        <div className="flex flex-auto gap-5 px-8 py-3 bg-gray-100 rounded-3xl max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/812e4b7a0e48a79b9e457eca400e3eb6db0de475fa28c76b687cba9e33326401?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Lock icon"
          />
          <input
            type="text"
            placeholder="CVV"
            className="my-auto basis-auto bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-between px-8 py-2.5 mt-7 max-w-full text-xs font-medium bg-gray-100 rounded-3xl w-[525px] max-md:px-5">
        <div className="flex gap-6 text-neutral-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/977d95960df1a4cb22b49efaa71454acd0a7cfa3a6dc4eb14a07bea77377843f?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 w-7 aspect-square"
            alt="Amount icon"
          />
          <span className="my-auto">Amount (GHS)</span>
        </div>
        <span className="my-auto text-black">0.00</span>
      </div>
    </div>
  );
};