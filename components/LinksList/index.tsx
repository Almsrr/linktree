import { FC } from "react";
import styled from "styled-components";

import type { Link } from "../../types/Link";
import LinkItem from "./LinkItem";

interface LinksProps {
  links: Link[];
}

const LinksList: FC<LinksProps> = ({ links }) => {
  if (!links.length) {
    return <Text>No links to show</Text>;
  }
  return (
    <List>
      {links.map(link => (
        <LinkItem key={link.id} title={link.title} url={link.url} />
      ))}
    </List>
  );
};

export default LinksList;

const Text = styled.p`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;
