import type { NextPage } from 'next';

import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import SubscriptionItem from 'src/components/SubscriptionItem';
import Sum from 'src/components/Sum';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Layout title='Track My Bill'>
        <>
          <Sum />
          <SubscriptionItem />
        </>
      </Layout>
    </>
  );
};

export default Home;
