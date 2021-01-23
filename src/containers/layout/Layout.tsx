import { memo } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col w-full min-h-screen ">
    <Header />
    <main className="flex flex-col justify-center items-center flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default memo(Layout);
