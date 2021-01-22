import Head from "next/head";

import Layout from '../containers/layout/Layout';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <h1>The Good, The Bad & The Board</h1>
      </Layout>
    </>
  );
}
