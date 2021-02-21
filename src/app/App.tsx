import { useEffect, FC } from "react";

import { Routes } from "../Routes";

import "../styles/GlobalStyles.css";
import "../styles/TypoGraphy.css";

import styles from "./App.module.css";

interface AppProps {
  isVerifying: boolean;
  isAuthenticated: boolean;
  verifyUserConnect: () => void;
}

const App: FC<AppProps> = ({
  isVerifying,
  isAuthenticated,
  verifyUserConnect,
}) => {
  useEffect(() => {
    /** Verify user on page load or refresh*/
    verifyUserConnect();
  }, []);

  return (
    <div className={styles.App}>
      <Routes isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
    </div>
  );
};

export default App;
