/** External packages imported at top */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

/** Relative components, files and assets*/
import { Image } from "../common";
import { Logout } from "../components";
import { UserImage } from "../assets/images";

/** global store or context */
import { AuthenticateActionTypes } from "../store/actions";
import { logoutUser } from "../store/operations";
import { IState } from "../store/types";

/** styles */
import styles from "../styles/PageStyles/Home.module.css";

const HomePage: FC<{}> = () => {
  const {
    auth: { user },
  } = useSelector((state: IState) => state);
  const dispatch: Dispatch<AuthenticateActionTypes, {}, any> = useDispatch();

  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        <div className={styles.imageContainer}>
          <Image src={user?.photoURL || UserImage} alt="User" radius={"50%"} />
        </div>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={() => dispatch(logoutUser())} />
    </div>
  );
};

export default HomePage;
