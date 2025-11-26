import React, { useState } from "react";

const Setting = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="amount"
        className="text-md mt-2 block font-medium text-gray-700"
      >
        Amount:
      </label>
      <input
        id="amount"
        type="number"
        placeholder="please enter the amount"
        className="mt-2 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
};

export default Setting;
