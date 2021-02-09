import { connect } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import { AuthenticateActionTypes } from "../../store/actions";
import { IState } from "../../store/types";
import { loginUser } from "../../store/operations";

import LoginPage from "./LoginPage";

const mapStateToProps = (state: IState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  return {
    loginUserConnect: () => dispatch(loginUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
