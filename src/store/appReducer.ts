import { IAction, IAppState } from "../interfaces";
import { TYPES } from "./types";

const defState: IAppState = {
  error: null,
  loading: false,
};

export function appReducer(
  state: IAppState = defState,
  action: IAction
): IAppState {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    case TYPES.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
