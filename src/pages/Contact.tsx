
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import BusinessHours from '@/components/contact/BusinessHours';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
      <BusinessHours />
    </Layout>
  );
};

export default Contact;
