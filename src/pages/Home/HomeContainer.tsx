import { connect } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import { AuthenticateActionTypes } from "../../store/actions";
import { IState } from "../../store/types";
import { logoutUser } from "../../store/operations";

import HomePage from "./HomePage";

const mapStateToProps = (state: IState) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  return {
    logoutUserConnect: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
