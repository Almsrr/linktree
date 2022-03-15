import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import profilePhoto from "../assets/images/palas-pingpong.jpeg";

import Account from "../shared/models/Account";

const Home: NextPage<Account> = ({ name, bio, links }) => {
  return (
    <>
      <Head>
        <title>Linktree</title>
        <link rel="icon" href="/favicon.ico" />
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
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fs = require("fs");

  const rawData = await fs.readFileSync("data/seed.json");
  const data = JSON.parse(rawData);

  return {
    props: data["account"],
  };
};

export default Home;
