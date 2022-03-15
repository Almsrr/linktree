import { FC } from "react";

import styles from "./LinksList.module.css";

import LinkModel from "../../shared/models/Link";
import Link from "./Link/Link";

interface LinksProps {
  links: LinkModel[];
}

const LinksList: FC<LinksProps> = ({ links }) => {
  if (!links) {
    return <p className={styles.text}>No links to show</p>;
  }
  return (
    <ul className={styles.links}>
      {links.map(link => (
        <Link key={link.id} title={link.title} url={link.url} />
      ))}
    </ul>
  );
};

export default LinksList;
