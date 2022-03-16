import { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-spotify"></i>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 1rem 0;

  & ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    justify-content: center;
  }

  & ul li {
    font-size: 1.75rem;
    color: #541c3f;
  }
`;
