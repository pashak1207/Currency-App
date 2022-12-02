import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreator from "../actions/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};
