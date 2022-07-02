import React from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Container maxWidth='md'>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
