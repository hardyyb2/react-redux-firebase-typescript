import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_TYPE,
  LOGIN_SUCCESS,
  LOGIN_SUCCESS_TYPE,
  LOGIN_ERROR,
  LOGIN_ERROR_TYPE,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_TYPE,
  LOGOUT_SUCCESS,
  LOGOUT_SUCCESS_TYPE,
  LOGOUT_ERROR,
  LOGOUT_ERROR_TYPE,
  VERIFY_REQUEST,
  VERIFY_REQUEST_TYPE,
  VERIFY_SUCCESS,
  VERIFY_SUCCESS_TYPE,
  VERIFY_ERROR,
  VERIFY_ERROR_TYPE,
} from "../constants";
import { userDetailsProps } from "../../utils/functions";

/**
 *  LOGIN
 * */
interface LOGIN_REQUEST_PROPS {
  type: LOGIN_REQUEST_TYPE;
  payload: null;
  error: null;
}

const loginRequest = (): LOGIN_REQUEST_PROPS => ({
  type: LOGIN_REQUEST,
  payload: null,
  error: null,
});

interface LOGIN_SUCCESS_PROPS {
  type: LOGIN_SUCCESS_TYPE;
  payload: userDetailsProps;
  error: null;
}

const loginSuccess = (user: userDetailsProps): LOGIN_SUCCESS_PROPS => ({
  type: LOGIN_SUCCESS,
  payload: user,
  error: null,
});

interface LOGIN_ERROR_PROPS {
  type: LOGIN_ERROR_TYPE;
  payload: null;
  error: string;
}

const loginError = (error: string): LOGIN_ERROR_PROPS => ({
  type: LOGIN_ERROR,
  payload: null,
  error,
});

/**
 * VERIFY
 */
interface VERIFY_REQUEST_PROPS {
  type: VERIFY_REQUEST_TYPE;
  payload: null;
  error: null;
}

const verifyRequest = (): VERIFY_REQUEST_PROPS => ({
  type: VERIFY_REQUEST,
  payload: null,
  error: null,
});

interface VERIFY_SUCCESS_PROPS {
  type: VERIFY_SUCCESS_TYPE;
  payload: userDetailsProps;
  error: null;
}

const verifySuccess = (user: userDetailsProps): VERIFY_SUCCESS_PROPS => ({
  type: VERIFY_SUCCESS,
  payload: user,
  error: null,
});

interface VERIFY_ERROR_PROPS {
  type: VERIFY_ERROR_TYPE;
  payload: null;
  error: string;
}

const verifyError = (error: string): VERIFY_ERROR_PROPS => ({
  type: VERIFY_ERROR,
  payload: null,
  error,
});

/**
 * LOGOUT
 */

interface LOGOUT_REQUEST_PROPS {
  type: LOGOUT_REQUEST_TYPE;
  payload: null;
  error: null;
}

const logoutRequest = (): LOGOUT_REQUEST_PROPS => ({
  type: LOGOUT_REQUEST,
  payload: null,
  error: null,
});

interface LOGOUT_SUCCESS_PROPS {
  type: LOGOUT_SUCCESS_TYPE;
  payload: null;
  error: null;
}

const logoutSuccess = (): LOGOUT_SUCCESS_PROPS => ({
  type: LOGOUT_SUCCESS,
  payload: null,
  error: null,
});

interface LOGOUT_ERROR_PROPS {
  type: LOGOUT_ERROR_TYPE;
  payload: null;
  error: string;
}

const logoutError = (error: string): LOGOUT_ERROR_PROPS => ({
  type: LOGOUT_ERROR,
  payload: null,
  error,
});

export type AuthenticateActionTypes =
  | LOGIN_REQUEST_PROPS
  | LOGIN_SUCCESS_PROPS
  | LOGIN_ERROR_PROPS
  | LOGOUT_REQUEST_PROPS
  | LOGOUT_SUCCESS_PROPS
  | LOGOUT_ERROR_PROPS
  | VERIFY_REQUEST_PROPS
  | VERIFY_SUCCESS_PROPS
  | VERIFY_ERROR_PROPS;

const authActions = {
  loginRequest,
  loginSuccess,
  loginError,

  verifyRequest,
  verifySuccess,
  verifyError,

  logoutRequest,
  logoutSuccess,
  logoutError,
};

export default authActions;
