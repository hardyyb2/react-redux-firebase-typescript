import styles from "./Logout.module.css";

interface IProps {
  handleLogout: () => void;
}
const Logout: React.FC<IProps> = ({ handleLogout }) => {
  return (
    <div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
