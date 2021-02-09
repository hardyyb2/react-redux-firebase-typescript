import { Logout } from "../../components";
import { userDetailsProps } from "../../store/utility";

import styles from "./Home.module.css";

interface IProps {
  user: userDetailsProps | null;
  logoutUserConnect: () => void;
}

const HomePage: React.FC<IProps> = ({ user, logoutUserConnect }) => {
  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={logoutUserConnect} />
    </div>
  );
};

export default HomePage;
