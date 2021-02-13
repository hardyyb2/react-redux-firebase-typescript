import { FC } from "react";
import { Link } from "react-router-dom";

import { Image } from "../common";
import { NotFoundImage } from "../assets/images";

import styles from "../styles/PageStyles/NotFound.module.css";

const NotFound: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={NotFoundImage} alt="404" width="60%" />
      <div className={styles.lostContainer}>OOPS! Looks like you're lost.</div>
      <div className={styles.linksContainer}>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
