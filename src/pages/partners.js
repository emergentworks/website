import React from 'react';
import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { FeatureCard } from '../components/FeatureCard';
import PartnersModule from '../components/PartnersModule';

import styles from './partners.module.scss';

const PartnersPage = () => {
  return (
    <Layout>
      <SEO title="Partners" />
      <section className={cx('content')}>
        <h1>Our Partners</h1>
        <p>
          We partner with incredible organizations on our products and programs
          to catalyze our shared goal to address and put an end to the crisis of
          mass incarceration. You can learn more about all the organizations we
          partner with below our featured partner.
        </p>
        <section className={cx(styles.cardWrapper)}>
          <FeatureCard
            heading="Community Justice Exchange"
            bannerCopy="Featured Partner"
            isFeatured
          >
            <p>
              Emergent Works partners with the Community Justice Exchange (CJE)
              on one of our flagship software products, the Bail Fund App (BFA).
              The BFA is a bespoke web-based CRM that supports the National Bail
              Fund Network, a network of over ninety community bail and bond
              funds across the country organized in collaboration with CJE. The
              BFA supports funds within the NBFN in more efficiently and
              effectively deploying bail funds to individuals in pretrial and
              immigration detention who could otherwise not afford it.
            </p>

            <p>
              As a tool, the BFA supports CJE’s work and goal to serve as a
              national hub for developing, sharing, and experimenting with
              tactical interventions, strategic organizing practices, and
              innovative organizing tools toward prison industrial complex
              abolition. By increasing the capacity of community bail funds in
              the NBFN, EW’s work furthers the work of CJE in providing support
              to community-based organizations that are experimenting with
              bottom-up, power-building interventions in the criminal legal and
              immigration detention systems.
            </p>
          </FeatureCard>
        </section>
      </section>
      <PartnersModule subheading="Emergent Works is proud to serve alongside these donors, sponsors, and partners:" />
    </Layout>
  );
};

export default PartnersPage;
