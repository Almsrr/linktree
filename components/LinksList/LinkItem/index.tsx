import { FC } from "react";
import styled from "styled-components";

interface LinkProps {
  title: string;
  url: string;
}

const LinkItem: FC<LinkProps> = ({ title, url }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noreferrer">
        {title}
      </Link>
    </li>
  );
};

export default LinkItem;

const Link = styled.a`
  display: block;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 2rem;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  color: #000;
  transition: all 200ms ease-in;

  &:hover {
    color: #fff;
    background-color: transparent;
  }
`;
