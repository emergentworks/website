import React from 'react';
// import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { PartnersModule } from '../components/PartnersModule/PartnersModule';
import CtaLink from '../components/CtaLink/CtaLink';

// import styles from './partners.module.scss';

const PartnersPage = () => {
  return (
    <Layout>
      <SEO title="Partners" />
      <section className="page-content">
        <h1>Our Partners</h1>
        <p>
          We partner with incredible organizations on our products and programs
          to catalyze our shared goal to address and put an end to the crisis of
          mass incarceration.
        </p>
        <div className="tc">
          <h2>
            Are you part of an organization in need of a technical solution to
            support your movement?
          </h2>
          <CtaLink href="https://airtable.com/appHQ4afO15UK9DwN/shrQsAFeo6QSRVsMH">
            Contact Us
          </CtaLink>
        </div>
        <section>
          <h2>Our Community Partners</h2>
          <PartnersModule />
        </section>
      </section>
    </Layout>
  );
};

export default PartnersPage;
