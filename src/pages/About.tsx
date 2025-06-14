
import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import CompanyInfo from '@/components/about/CompanyInfo';
import MissionVision from '@/components/about/MissionVision';
import WorkWithUs from '@/components/about/WorkWithUs';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <CompanyInfo />
      <MissionVision />
      <WorkWithUs />
    </Layout>
  );
};

export default About;
