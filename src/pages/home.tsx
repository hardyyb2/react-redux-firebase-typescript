import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import { Logout } from "../components";
import { AuthenticateActionTypes } from "../store/actions";
import { logoutUser } from "../store/operations";
import { IState } from "../store/types";

import styles from "../styles/PageStyles/Home.module.css";

const HomePage: React.FC<{}> = () => {
  const user = useSelector((state: IState) => state.auth.user);
  const dispatch: Dispatch<AuthenticateActionTypes, {}, any> = useDispatch();

  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={() => dispatch(logoutUser())} />
    </div>
  );
};

export default HomePage;
