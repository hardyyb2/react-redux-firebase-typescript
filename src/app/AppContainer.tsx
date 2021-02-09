import { connect } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import { AuthenticateActionTypes } from "../store/actions";
import { IState } from "../store/types";
import { verifyUser } from "../store/operations";

import App from "./App";

const mapStateToProps = (state: IState) => {
  return {
    user: state.auth.user,
    isVerifying: state.auth.isVerifying,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  return {
    verifyUserConnect: () => dispatch(verifyUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
