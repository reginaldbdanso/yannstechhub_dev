import React from 'react';

export const OrderItems = () => {
  return (
    <section className="flex flex-col px-6 pt-8 pb-14 w-full text-base font-medium text-black bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5">
      <header className="flex gap-5 justify-between self-center max-w-full font-bold w-[336px]">
        <h2>My Order Summary</h2>
        <button>Edit</button>
      </header>

      <div className="flex flex-col gap-4">
        <article className="flex gap-4 self-start mt-8 ml-3 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3d2d15b23f08d6a7e4a2e6a232f16067819ffa196f0281f853b8b8b5396d9b4?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 rounded-xl aspect-[1.06] w-[89px]"
            alt="Product 1"
          />
          <div className="flex flex-col items-start self-start mt-1.5">
            <h3 className="self-stretch font-bold">Lorem ipsum dolor</h3>
            <p className="mt-2.5">Qty: 1</p>
            <p className="mt-3">$50.00</p>
          </div>
        </article>
        <hr className="border-neutral-300" />

        <article className="flex gap-4 self-start mt-5 ml-3 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d8eab4fe28a73835d78dacacb812768449843e65448f1aa79482ad7a0d5e41?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 rounded-xl aspect-[1.06] w-[89px]"
            alt="Product 2"
          />
          <div className="flex flex-col items-start self-start">
            <h3 className="self-stretch font-bold">Lorem ipsum dolor</h3>
            <p className="mt-2">Qty: 1</p>
            <p className="mt-3">$99.99</p>
          </div>
        </article>
        <hr className="border-neutral-300" />

        <article className="flex gap-4 self-start mt-5 ml-3 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dec0a85ae305f77f0be2bbd7994f06e59650e4d5ff4602c193c0386f8e57c48?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            className="object-contain shrink-0 rounded-xl aspect-[1.06] w-[89px]"
            alt="Product 3"
          />
          <div className="flex flex-col items-start self-start mt-1">
            <h3 className="self-stretch font-bold">Lorem ipsum dolor</h3>
            <p className="mt-2">Qty: 1</p>
            <p className="mt-3">$99.99</p>
          </div>
        </article>
      </div>
    </section>
  );
};
