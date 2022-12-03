import React, { useState } from "react";
import { IReadonlyProps } from "../interfaces";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const Input: React.FC<IReadonlyProps> = ({ isReadonly }) => {
  const [firstFocus, setFirstFocus] = useState(true);
  const { setValueNumberAction, setConvertedNumberAction } = useActions();
  const currencyState = useTypedSelector((state) => state.currency);

  const valueNumber = currencyState.valueNumber;
  const currencyFrom = currencyState.valueCurrencyFrom;
  const currencyTo = currencyState.valueCurrencyTo;
  const convertedValue = currencyState.convertedValue;

  const convertValueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstFocus(false);
    if (!e.target.value.trim()) {
      setConvertedNumberAction(0);
      setValueNumberAction("");
    } else {
      let finishedValue =
        (currencyFrom!.rate / currencyTo!.rate) * parseFloat(e.target.value);
      setConvertedNumberAction(finishedValue);
      setValueNumberAction(e.target.value);
    }
  };

  if (isReadonly) {
    return (
      <input
        className={
          "border border-neutral-300 focus:border-blue-400 rounded mb-2 p-1 w-full"
        }
        value={convertedValue}
        type="number"
        readOnly={true}
      />
    );
  }
  return (
    <input
      className={
        "border border-neutral-300 focus:border-blue-400 rounded mb-2 p-1 w-full"
      }
      value={valueNumber}
      onChange={convertValueEvent}
      onFocus={() => {
        if (firstFocus) {
          setValueNumberAction("");
        }
      }}
      type="number"
    />
  );
};
