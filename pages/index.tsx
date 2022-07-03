import type { NextPage } from 'next';
import { nanoid } from 'nanoid';

import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import SubscriptionItem from 'src/components/SubscriptionItem/SubscriptionItem';
import Sum from 'src/components/Sum';

const SubscriptionData = [
  {
    id: nanoid(),
    name: 'Adobe Creative Cloud',
    billingCycle: 'monthly',
    billingRate: '57.69',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
  },
  {
    id: nanoid(),
    name: 'Github',
    billingCycle: 'monthly',
    billingRate: '7.00',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
  },
  {
    id: nanoid(),
    name: 'Microsoft Office',
    billingCycle: 'yearly',
    billingRate: '76.20',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
  },
  {
    id: nanoid(),
    name: 'Netflix',
    billingCycle: 'monthly',
    billingRate: '6.35',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
    endingDate: new Date('2022-07-03'),
  },
  {
    id: nanoid(),
    name: 'Last Pass',
    billingCycle: 'monthly',
    billingRate: '3.00',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
    endingDate: new Date('2022-07-03'),
  },
  {
    id: nanoid(),
    name: 'Amazon Prime',
    billingCycle: 'yearly',
    billingRate: '129.56',
    billingDate: new Date('2022-07-28'),
    currency: 'USD',
    startingDate: new Date('2022-01-01'),
    endingDate: new Date('2022-07-03'),
  },
];

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
