import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import Account from "../shared/models/Account";

const Home: NextPage<Account> = props => {
  return (
    <>
      <Head>
        <title>Linktree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
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
