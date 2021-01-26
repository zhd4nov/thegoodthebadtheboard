import Head from 'next/head';

import { ReactNode } from 'react';
import { withTranslation } from '../../i18n';

import Layout from '../containers/layout/Layout';

interface Props {
  t(ns: string): ReactNode;
}

function Index({ t }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>The Board</title>
      </Head>

      <Layout>
        <h1 className="text-green-800 hover:text-green-500 cursor-default font-bold">
          {t('example')}
        </h1>
      </Layout>
    </>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
