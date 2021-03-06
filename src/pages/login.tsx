import { FC } from "react";
import { ThunkDispatch as Dispatch } from "redux-thunk";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../store/types";
import { AuthenticateActionTypes } from "../store/actions";
import { loginUser } from "../store/operations";

import styles from "../styles/PageStyles/Login.module.css";

const LoginPage: FC<{}> = () => {
  const {
    auth: { isAuthenticated },
  } = useSelector((state: IState) => state);
  const dispatch: Dispatch<AuthenticateActionTypes, {}, any> = useDispatch();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button
        onClick={() => dispatch(loginUser())}
        className={styles.loginButton}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
