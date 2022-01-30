import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { coordinatesActions } from "../store/coordinates/coordinatesSlice";
import { queryActions } from "../store/query/querySlice";

const AllActions = {
  ...queryActions,
  ...coordinatesActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
