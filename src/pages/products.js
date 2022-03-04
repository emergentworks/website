import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { WaterColor } from '../components/WaterColor/WaterColor';

import styles from './products.module.scss';

const ProductsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Products" />
    <div className={cx(styles.root, 'content')}>
      <div className="twoColumnLayout">
        <h1 className="title leftColumn">
          We build technology to drive positive social change and end the mass
          incarceration crisis.
        </h1>
        <div className="rightColumn">
          <div className="videoWrapper">
            <WaterColor color="green" />
          </div>
        </div>
      </div>
      <section className={cx(styles.cardWrapper)}>
        <div className={cx(styles.card, styles.cardWd)}>
          <span className={cx(styles.featured)}>Featured Product</span>
          <h2>Bail Fund App</h2>
          <p>
            The Bail Fund App (BFA) is a bespoke web-based CRM developed in
            partnership with Community Justice Exchange (CJE) that supports a
            national network of community bail funds to more efficiently and
            effectively deploy bail funds to individuals in pretrial and
            immigration detention who could otherwise not afford it. The BFA
            facilitates the work of community bail funds through a
            highly-customizable user interface, tailored to a bail fund's
            specific workflow needs. By providing funds with industry-leading
            technology and accurate data about the clients they serve, the BFA
            frees up valuable time and resources so funds can serve greater
            numbers of people, and inform policy to end cash bail practices.
          </p>
        </div>
        <div className={cx(styles.card, styles.cardSm)}>
          <h2>Not911</h2>
          <p>
            <a
              href="https://medium.com/@emergentworks/meet-the-formerly-incarcerated-software-engineers-who-built-a-no-police-alternative-to-911-5a5af163f8b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Not911
            </a>{' '}
            is a mobile app for resolving community-level issues without police
            involvement. Not911 connects users to nonprofits and government
            agencies to address issues ranging from domestic violence to
            homelessness, without police intervention.
          </p>
        </div>
        <div className={cx(styles.card, styles.cardSm)}>
          <h2>Community Connection Hub</h2>
          <p>
            Community Connection Hub (CCH), launching in 2022, is the world's
            first web-based platform to facilitate community development,
            mentorship, education, and pathways to employment for the movement
            of people and organizations working to end the crisis of mass
            incarceration.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default ProductsPage;
