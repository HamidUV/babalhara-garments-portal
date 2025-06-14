
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
    </Layout>
  );
};

export default Contact;
