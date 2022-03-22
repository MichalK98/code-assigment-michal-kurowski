import React, { ReactNode } from 'react';
import { Header, Footer } from '@Partials';

interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
