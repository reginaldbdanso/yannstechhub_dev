import React from 'react';

export const BreadcrumbNav = () => {
  return (
    <nav className="flex flex-wrap gap-3 mt-2.5 ml-36 max-w-full text-base font-medium text-black w-[507px]">
      <span className="gap-2.5 self-stretch px-3.5 py-1 font-bold whitespace-nowrap bg-white rounded-xl min-h-7">
        yannstechub
      </span>
      <span className="gap-2.5 self-stretch px-3 py-1 bg-white rounded-xl min-h-7">
        / Daily deals
      </span>
      <span className="gap-2.5 self-stretch px-3 py-1 bg-white rounded-xl min-h-7">
        / Cart
      </span>
      <span className="gap-2.5 self-stretch py-1 pr-2.5 pl-3 bg-white rounded-xl min-h-7">
        / Secure Checkout
      </span>
    </nav>
  );
};
