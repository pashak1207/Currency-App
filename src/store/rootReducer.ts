import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
