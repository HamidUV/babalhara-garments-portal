
import React from 'react';
import Layout from '@/components/layout/Layout';
import ProductsHero from '@/components/products/ProductsHero';
import ProductCategories from '@/components/products/ProductCategories';
import ProductInquiry from '@/components/products/ProductInquiry';

const Products = () => {
  return (
    <Layout>
      <ProductsHero />
      <ProductCategories />
      <ProductInquiry />
    </Layout>
  );
};

export default Products;
