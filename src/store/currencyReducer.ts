import { IAction, ICurrencyState } from "../interfaces";
import { TYPES } from "./types";

const defState: ICurrencyState = {
  currencyList: JSON.parse(localStorage.getItem("localCurrency") ?? "[]"),
  valueNumber: JSON.parse(localStorage.getItem("valueNumber") ?? "0"),
  convertedValue: JSON.parse(
    localStorage.getItem("convertedValueNumber") ?? "0"
  ),
  valueCurrencyFrom: JSON.parse(
    localStorage.getItem("valueFrom") ??
      JSON.stringify({
        r030: 36,
        txt: "Австралійський долар",
        rate: 24.8612,
        cc: "AUD",
        exchangedate: "02.12.2022",
        value: "AUD",
        label: "Австралійський долар",
      })
  ),
  valueCurrencyTo: JSON.parse(
    localStorage.getItem("valueTo") ??
      JSON.stringify({
        r030: 36,
        txt: "Австралійський долар",
        rate: 24.8612,
        cc: "AUD",
        exchangedate: "02.12.2022",
        value: "AUD",
        label: "Австралійський долар",
      })
  ),
};

export function currencyReducer(
  state: ICurrencyState = defState,
  action: IAction
): ICurrencyState {
  switch (action.type) {
    case TYPES.FETCH_CURRENCY_LIST:
      return { ...state, currencyList: action.payload };
    case TYPES.SET_VALUE_NUMBER:
      return { ...state, valueNumber: action.payload };
    case TYPES.SET_CONVERTED_VALUE:
      return { ...state, convertedValue: action.payload };
    case TYPES.SET_CURRENCY_FROM:
      return { ...state, valueCurrencyFrom: action.payload };
    case TYPES.SET_CURRENCY_TO:
      return { ...state, valueCurrencyTo: action.payload };
    case TYPES.RELOAD_STATE:
      return { ...state };
    default:
      return state;
  }
}
