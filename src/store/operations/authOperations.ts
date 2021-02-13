import { ThunkDispatch as Dispatch } from "redux-thunk";

import { auth, googleProvider, myFirebase } from "../../firebase";
import { createErrorMessage, createUserDetails } from "../../utils/functions";
import { authActions } from "../actions";
import { AuthenticateActionTypes } from "../actions/authActions";

export const loginUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(authActions.loginRequest());

  try {
    const { user } = await auth.signInWithPopup(googleProvider);

    const userDetails = createUserDetails(user);

    if (user?.uid) {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
    dispatch(authActions.loginSuccess(userDetails));
  } catch (error) {
    const message = createErrorMessage(error);
    dispatch(authActions.loginError(message));
  }
};

export const verifyUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(authActions.verifyRequest());
  myFirebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        const userDetails = createUserDetails(user);
        dispatch(authActions.verifySuccess(userDetails));
      } else {
        const err = {
          code: "auth/no-user",
          message: "No user found",
        };
        const message = createErrorMessage(err);
        dispatch(authActions.verifyError(message));
      }
    },
    (error) => {
      const message = createErrorMessage(error);
      dispatch(authActions.verifyError(message));
    }
  );
};

export const logoutUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(authActions.logoutRequest());
  try {
    await auth.signOut();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    const message = createErrorMessage(error);
    dispatch(authActions.logoutError(message));
  }
};
