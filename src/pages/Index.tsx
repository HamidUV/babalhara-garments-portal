
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import Categories from '@/components/home/Categories';
import WhyChooseUs from '@/components/home/WhyChooseUs';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Categories />
      <WhyChooseUs />
    </Layout>
  );
};

export default Index;
