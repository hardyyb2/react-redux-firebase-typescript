import { AuthenticateActionTypes } from "../actions";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
} from "../constants";
import { IAuth } from "../types";

const initialState: IAuth = {
  isAuthenticated: false,
  isVerifying: true,
  loading: false,
  error: null,
  user: null,
};

const reducer = (
  state: IAuth = initialState,
  action: AuthenticateActionTypes
): IAuth => {
  const { type, payload, error } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isVerifying: true,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isVerifying: false,
        loading: false,
        user: payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isVerifying: false,
        loading: false,
        error: error,
      };

    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
      };

    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        isAuthenticated: true,
        user: payload,
      };

    case VERIFY_ERROR:
      return {
        ...state,
        isVerifying: false,
        error: error,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isVerifying: true,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isVerifying: false,
        loading: false,
        user: null,
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        isVerifying: false,
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};

export default reducer;
