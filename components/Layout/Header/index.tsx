import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface HeaderProps {
  image: string;
  name: string;
  username: string;
  bio: string;
}

const Header: FC<HeaderProps> = ({ image, name, username, bio }) => {
  return (
    <Container>
      <Image
        src={image}
        width={100}
        height={100}
        alt={`${username}-profile-image`}
        className="img"
      />
      <h1>{name}</h1>
      <p>{bio}</p>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  color: #541c3f;

  & .img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
  }

  & h1 {
    text-transform: capitalize;
    text-align: center;
    font-weight: 400;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }

  & p {
    text-align: center;
    margin-top: 0.25rem;
  }
`;
