
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import Categories from '@/components/home/Categories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CompanyInfo from '@/components/about/CompanyInfo';
import MissionVision from '@/components/about/MissionVision';
import WorkWithUs from '@/components/about/WorkWithUs';
import ContactInfo from '@/components/contact/ContactInfo';

const Index = () => {
  return (
    <Layout>
      {/* Home Sections */}
      <Hero />
      <Introduction />
      <Categories />
      <WhyChooseUs />
      
      {/* About Sections */}
      <div id="about">
        <CompanyInfo />
        <MissionVision />
        <WorkWithUs />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactInfo />
      </div>
    </Layout>
  );
};

export default Index;
