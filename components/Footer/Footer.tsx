import { FC } from "react";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li className={styles.icon}>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li className={styles.icon}>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li className={styles.icon}>
          <i className="fa-brands fa-spotify"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
