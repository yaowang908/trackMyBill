import type { NextPage } from 'next';
import { SubscriptionData } from 'src/features/mockData';

import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import SubscriptionItem from 'src/components/SubscriptionItem/SubscriptionItem';
import Sum from 'src/components/Sum';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Layout title='Track My Bill'>
        <>
          <Sum />
          {SubscriptionData.map((s) => (
            <SubscriptionItem {...s} key={s.id} />
          ))}
        </>
      </Layout>
    </>
  );
};

export default Home;
