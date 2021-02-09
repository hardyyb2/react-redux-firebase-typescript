import { Redirect } from "react-router-dom";

import styles from "./Login.module.css";

interface IProps {
  isAuthenticated: boolean;
  loginUserConnect: () => void;
}

const LoginPage: React.FC<IProps> = ({ isAuthenticated, loginUserConnect }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button onClick={loginUserConnect} className={styles.loginButton}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
