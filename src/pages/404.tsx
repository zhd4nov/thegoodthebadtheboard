import { withTranslation } from '../../i18n';

const FourOhFourPage = ({ t }): JSX.Element => (
  <div className="flex w-screen h-screen items-center justify-center">
    <h1>{t('404Title')}</h1>
  </div>
);

FourOhFourPage.getInitialProps = async () => ({
  namespacesRequired: ['error'],
});

export default withTranslation('error')(FourOhFourPage);
