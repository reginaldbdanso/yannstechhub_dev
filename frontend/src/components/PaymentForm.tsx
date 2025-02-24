import React, { useState } from 'react';
import { PaymentMethodTabs } from './PaymentMethodTabs';
import { PaymentInputs } from './PaymentInputs';
import { PaymentLogos } from './PaymentLogos';

export const PaymentForm: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-xl font-bold text-black">Payment Method</h2>
      <div className="flex flex-col items-start px-11 pt-11 pb-28 mt-5 w-full bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <PaymentMethodTabs selected={selectedMethod} onSelect={setSelectedMethod} />
        <PaymentInputs />
        <PaymentLogos />
        <button className="self-center px-36 py-5 mt-9 ml-6 max-w-full text-base font-bold text-white bg-sky-700 min-h-[57px] rounded-[30px] w-[469px] max-md:px-5">
          Make Payment
        </button>
      </div>
    </div>
  );
};