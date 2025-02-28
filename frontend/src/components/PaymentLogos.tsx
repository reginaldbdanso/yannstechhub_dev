import React from 'react';

export const PaymentLogos: React.FC = () => {
  return (
    <div className="flex gap-4 mt-20 mb-0 ml-5 max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/019049c0e90a7169b8dcb06d9ac93eed81b07dadad55bf7a87f9f7e36e71f98c?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
        className="object-contain shrink-0 self-start w-11 aspect-square"
        alt="Payment logo 1"
      />
      <div className="flex gap-1.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21100b53cb7d691fdf947ded4d15b8bd99f12be24160215a2ff8d814aec85822?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
          className="object-contain shrink-0 self-start mt-1 aspect-[1.81] w-[74px]"
          alt="Payment logo 2"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fff9503e6c7c4c2435cb08fe24d9909920ef69dda9c774bde6f025d36675dcf3?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
          className="object-contain shrink-0 aspect-[1.33] w-[60px]"
          alt="Payment logo 3"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/305111411abc5005d16c250ef78a10a00c496d1fac47de72254a1a3dbe0ae0df?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
          className="object-contain shrink-0 my-auto aspect-[1.53] w-[49px]"
          alt="Payment logo 4"
        />
      </div>
    </div>
  );
};