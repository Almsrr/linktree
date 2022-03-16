import type { NextPage, GetServerSideProps } from "next";

import Account from "../types/Account";
import Layout from "../components/Layout";
import LinksList from "../components/LinksList";

const LinktreePage: NextPage<Account> = ({
  imageURL,
  name,
  username,
  bio,
  links,
}) => {
  return (
    <Layout
      title={name}
      imageURL={imageURL}
      name={name}
      username={username}
      bio={bio}
    >
      <LinksList links={links} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  // Can retrieve data for specific account by username
  // using the context object

  // Read the json directly
  const fs = require("fs");
  const rawData = await fs.readFileSync("data/seed.json");
  const data = JSON.parse(rawData);

  // Make a request
  // let data: any;
  // try {
  //   const res = await fetch("http://localhost:3000/api/account/0");
  //   if (!res.ok) {
  //     throw new Error("Something went wrong");
  //   }
  //   data = await res.json();
  // } catch (err: any) {
  //   console.log(err.message);
  // }

  return {
    props: data["account"],
  };
};

export default LinktreePage;
