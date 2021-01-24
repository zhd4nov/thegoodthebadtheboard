import Head from 'next/head';

import { withTranslation } from '../../i18n';

import Layout from '../containers/layout/Layout';

function Index({ t }): JSX.Element {
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

export default withTranslation('common')(Index);
