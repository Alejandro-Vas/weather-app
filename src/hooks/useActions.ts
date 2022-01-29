import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { queryActions } from "../store/query/querySlice";

const AllActions = {
  ...queryActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
