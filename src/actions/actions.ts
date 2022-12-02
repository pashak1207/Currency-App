import { IAction, ICurrencyObj } from "../interfaces";
import { TYPES } from "../store/types";
import { Dispatch } from "redux";
import axios, { AxiosError } from "axios";

export function addCurrencyListAction(payload: ICurrencyObj[]): IAction {
  return { type: TYPES.FETCH_CURRENCY_LIST, payload };
}

export function fetchAddCurrencyListAction() {
  return async function (dispatch: Dispatch<IAction>) {
    try {
      dispatch(setLoadingAction(true));
      const require = await axios.get(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
      );
      require.data.unshift({
        r030: 1,
        txt: "Українська гривня",
        rate: 1,
        cc: "UAH",
        exchangedate: "02.12.2022",
      });
      const typedRequire = require.data.map((item: ICurrencyObj) => ({
        ...item,
        value: item.cc,
        label: item.txt,
      }));

      localStorage.setItem("localCurrency", JSON.stringify(typedRequire));
      dispatch(setLoadingAction(false));
      return typedRequire;
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        dispatch(setErrorAction(e.message));
        setTimeout(() => {
          dispatch(disableErrorAction());
        }, 4000);
      }
    }
  };
}

export function setValueNumberAction(payload: string): IAction {
  localStorage.setItem("valueNumber", JSON.stringify(payload));
  return { type: TYPES.SET_VALUE_NUMBER, payload };
}

export function setConvertedNumberAction(payload: number): IAction {
  localStorage.setItem("convertedValueNumber", JSON.stringify(payload));
  return { type: TYPES.SET_CONVERTED_VALUE, payload };
}

export function setCurrencyFromAction(payload: string): IAction {
  localStorage.setItem("valueFrom", JSON.stringify(payload));
  return { type: TYPES.SET_CURRENCY_FROM, payload };
}

export function setCurrencyToAction(payload: string): IAction {
  localStorage.setItem("valueTo", JSON.stringify(payload));
  return { type: TYPES.SET_CURRENCY_TO, payload };
}

export function reloadBeforeStateAction(): IAction {
  return { type: TYPES.RELOAD_STATE };
}

export function setLoadingAction(payload: boolean): IAction {
  return { type: TYPES.SET_LOADING, payload };
}

export function setErrorAction(payload: string): IAction {
  return { type: TYPES.SET_ERROR, payload };
}

export function disableErrorAction(): IAction {
  return { type: TYPES.SET_ERROR, payload: null };
}
