import { FC } from "react";

import styles from "./Link.module.css";

interface LinkProps {
  title: string;
  url: string;
}

const Social: FC<LinkProps> = ({ title, url }) => {
  return (
    <li>
      <a href={url} className={styles.link} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
};

export default Social;
