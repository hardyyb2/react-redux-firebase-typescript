import { ThunkDispatch as Dispatch } from "redux-thunk";

import { auth, googleProvider, myFirebase } from "../../firebase";
import { createErrorMessage } from "../../utility";
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  verifyRequest,
  AuthenticateActionTypes,
  verifySuccess,
  verifyError,
} from "../actions";
import { createUserDetails } from "../utility";

export const loginUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(loginRequest());

  try {
    const { user } = await auth.signInWithPopup(googleProvider);

    const userDetails = createUserDetails(user);

    if (user?.uid) {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
    dispatch(loginSuccess(userDetails));
  } catch (error) {
    const message = createErrorMessage(error);
    dispatch(loginError(message));
  }
};

export const verifyUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        const userDetails = createUserDetails(user);
        dispatch(verifySuccess(userDetails));
      } else {
        const err = {
          code: "auth/no-user",
          message: "No user found",
        };
        const message = createErrorMessage(err);
        dispatch(verifyError(message));
      }
    },
    (error) => {
      const message = createErrorMessage(error);
      dispatch(verifyError(message));
    }
  );
};

export const logoutUser = () => async (
  dispatch: Dispatch<AuthenticateActionTypes, {}, any>
) => {
  dispatch(logoutRequest());
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    const message = createErrorMessage(error);
    dispatch(logoutError(message));
  }
};
