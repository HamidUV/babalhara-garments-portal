
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import Categories from '@/components/home/Categories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ContactInfo from '@/components/contact/ContactInfo';

const Index = () => {
  return (
    <Layout>
      {/* Home Sections */}
      <Hero />
      <Introduction />
      <Categories />
      <WhyChooseUs />
      
      {/* Contact Section */}
      <div id="contact">
        <ContactInfo />
      </div>
    </Layout>
  );
};

export default Index;
