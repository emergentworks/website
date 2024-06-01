import React from 'react';
// import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { PartnersModule } from '../components/PartnersModule/PartnersModule';
import CtaLink from '../components/CtaLink/CtaLink';

// import styles from './partners.module.scss';

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <section className="page-content">
        <h1>Sign up to Newsletter!</h1>
        <form>
          <label htmlFor="name"> Name: </label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="text" id="email" name="email" />
        </form>
        <button type="button">Submit</button>
      </section>
    </Layout>
  );
};

export default Newsletter;
