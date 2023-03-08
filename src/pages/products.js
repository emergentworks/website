import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { WaterColor } from '../components/WaterColor/WaterColor';
import { FeatureCard } from '../components/FeatureCard';

import styles from './products.module.scss';

const ProductsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Products" />
    <div className="content">
      <div className="twoColumnLayout">
        <h1 className="title">
          We build technology to drive positive social change and end the mass
          incarceration crisis.
        </h1>
        <WaterColor color="green" />
      </div>
      <p>Copy TBD</p>
      <section className={cx(styles.cardWrapper)}>
        <FeatureCard
          heading="Bail Fund App"
          bannerCopy="Featured Partner"
          isFeatured
        >
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
        </FeatureCard>
        <FeatureCard heading="Mentorship Program CRM">
          <p>TBD copy</p>
        </FeatureCard>
        <FeatureCard heading="BALT Project">
          <p>TBD copy</p>
        </FeatureCard>
        <FeatureCard heading="Not911">
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
        </FeatureCard>
      </section>
    </div>
    <div className={cx(styles.partnersFooter, 'content')}>
      <h2>Partner With Us!</h2>
      Are you impacted by mass incarceration? Have an idea for a product that we
      should build to support your community? Reach out to us at{' '}
      <a href="mailto:products@emergentworks.org?subject=Product%20Partnership">
        products@emergentworks.org
      </a>
      .
    </div>
  </Layout>
);

export default ProductsPage;
