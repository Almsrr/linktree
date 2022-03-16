import { FC } from "react";
import styled from "styled-components";

import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
  imageURL: string;
  name: string;
  username: string;
  bio: string;
}

const Layout: FC<LayoutProps> = props => {
  const { title, imageURL, name, username, bio, children } = props;
  return (
    <>
      <SEO title={title} />
      <Cover img={""}>
        <Page>
          <Container>
            <Header
              image={imageURL}
              name={name}
              username={username}
              bio={bio}
            />
            {children}
            <Footer />
          </Container>
        </Page>
      </Cover>
    </>
  );
};

export default Layout;

const Cover = styled.div<{ img: any }>`
  background-color: rgb(209, 70, 159, 0.6);
  position: relative;
  z-index: auto;
  width: 100vw;
  min-height: 100vh;

  &:before {
    content: "";
    background-image: url(${props => props.img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Container = styled.main`
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  padding: 1rem;
`;
