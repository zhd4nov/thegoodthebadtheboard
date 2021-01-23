import Head from 'next/head';

import Layout from '../containers/layout/Layout';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <h1 className="text-green-800 hover:text-green-500 cursor-default font-bold">
          The Good, The Bad & The Board
        </h1>
      </Layout>
    </>
  );
}
