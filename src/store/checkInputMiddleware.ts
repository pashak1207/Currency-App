import { TYPES } from "./types";
import {
  disableErrorAction,
  reloadBeforeStateAction,
  setErrorAction,
} from "../actions/actions";

// @ts-ignore
export function checkInputMiddleware({ dispatch }): any {
  return function (next: any) {
    return function (action: any) {
      if (action.type === TYPES.SET_VALUE_NUMBER) {
        if (action.payload.length > 18) {
          dispatch(setErrorAction("Ви ввели забагато символів"));
          return dispatch(reloadBeforeStateAction());
        }
        dispatch(disableErrorAction());
      }
      return next(action);
    };
  };
}
