import React from 'react';

interface PaymentMethodTabsProps {
  selected: string;
  onSelect: (method: string) => void;
}

export const PaymentMethodTabs: React.FC<PaymentMethodTabsProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-full">
      <div className="flex gap-10 items-center ml-3 text-xs font-medium text-black max-md:ml-2.5">
        <button
          className={`self-stretch my-auto rounded-none w-[81px] ${selected === 'mobile' ? 'font-bold' : ''}`}
          onClick={() => onSelect('mobile')}
        >
          Mobile Money
        </button>
        <button
          className={`self-stretch my-auto w-7 whitespace-nowrap rounded-none ${selected === 'card' ? 'font-bold' : ''}`}
          onClick={() => onSelect('card')}
        >
          Card
        </button>
      </div>
      <div className="flex gap-5 justify-between ml-3 max-w-full w-[165px] max-md:ml-2.5 mt-2">
        <div className={`flex shrink-0 h-0.5 w-[23px] ${selected === 'mobile' ? 'bg-black' : 'bg-white'}`} />
        <div className={`flex shrink-0 h-0.5 w-[23px] ${selected === 'card' ? 'bg-black' : 'bg-white'}`} />
      </div>
    </div>
  );
};