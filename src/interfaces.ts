export interface IReadonlyProps {
  isReadonly?: boolean;
}

export interface ICurrencyObj {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
  value: string;
  label: string;
}

export interface IRootState {
  currency: ICurrencyState;
}

export interface ICurrencyState {
  currencyList: ICurrencyObj[];
  valueNumber: number;
  convertedValue: number;
  valueCurrencyFrom: ICurrencyObj | null;
  valueCurrencyTo: ICurrencyObj | null;
}

export interface IAppState {
  loading: boolean;
  error: null | string;
}

export interface IAction {
  type: string;
  payload?: any;
}
