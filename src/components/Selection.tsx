import React from "react";
import Select from "react-select";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IReadonlyProps } from "../interfaces";
import { useActions } from "../hooks/useActions";

export const Selection: React.FC<IReadonlyProps> = ({ isReadonly }) => {
  const currencyState = useTypedSelector((state) => state.currency);
  const currencyList = useTypedSelector((state) => state.currency.currencyList);

  const valueCurrencyTo = currencyState.valueCurrencyTo;
  const valueCurrencyFrom = currencyState.valueCurrencyFrom;
  const valueNumber = currencyState.valueNumber;
  const {
    setCurrencyFromAction,
    setCurrencyToAction,
    setConvertedNumberAction,
  } = useActions();

  function changeEventFrom(e: any) {
    let finishedValue = (e.rate / valueCurrencyTo!.rate) * valueNumber;
    setConvertedNumberAction(finishedValue);
    setCurrencyFromAction({ ...e });
  }

  function changeEventTo(e: any) {
    let finishedValue = (valueCurrencyFrom!.rate / e.rate) * valueNumber;
    setConvertedNumberAction(finishedValue);
    setCurrencyToAction({ ...e });
  }

  if (isReadonly) {
    return (
      <Select
        value={{ ...valueCurrencyTo }}
        isSearchable={false}
        options={currencyList}
        onChange={changeEventTo}
      />
    );
  }

  return (
    <Select
      value={{ ...valueCurrencyFrom }}
      isSearchable={false}
      options={currencyList}
      onChange={changeEventFrom}
    />
  );
};
