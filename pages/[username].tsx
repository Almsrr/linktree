import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Linktree.module.css";
import profilePhoto from "../assets/images/ping-pod-profile-img.webp";

import Account from "../shared/models/Account";
import LinksList from "../components/Links/LinksList";
import Footer from "../components/Footer/Footer";

const LinktreePage: NextPage<Account> = ({ name, bio, links }) => {
  return (
    <>
      <Head>
        <title>Linktree - {name}</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.img}>
              <Image src={profilePhoto} alt="profile-photo" />
            </div>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.bio}>{bio}</p>
          </header>
          <main>
            <LinksList links={links} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const fs = require("fs");

  // Retrieve data for specific account by username
  // context

  const rawData = await fs.readFileSync("data/seed.json");
  const data = JSON.parse(rawData);

  return {
    props: data["account"],
  };
};

export default LinktreePage;
