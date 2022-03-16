import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  title: string;
}

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>Linktree - {title}</title>
    </Head>
  );
};

export default SEO;
