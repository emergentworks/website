import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { FeatureCard } from '../components/FeatureCard';

import styles from './partners.module.scss';

const PartnersPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuer {
      sponsors: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          name
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const sponsors = data.sponsors.nodes;
  sponsors.sort((a, b) => a.name > b.name);

  return (
    <Layout>
      <SEO title="Partners" />
      <section className={cx('content')}>
        <h1>Our Partners</h1>
          <p>
            We partner with incredible organizations on our products and
            programs to catalyze our shared goal to address and put an end to
            the crisis of mass incarceration. You can learn more about all the
            organizations we partner with below our featured partner.
          </p>
        <section className={cx(styles.cardWrapper)}>
        <FeatureCard
          heading="Community Justice Exchange"
          bannerCopy="Featured Partner"
          isFeatured
        >
          <p>
            Emergent Works partners with the Community Justice Exchange (CJE) on
            one of our flagship software products, the Bail Fund App (BFA). The
            BFA is a bespoke web-based CRM that supports the National Bail Fund
            Network, a network of over ninety community bail and bond funds
            across the country organized in collaboration with CJE. The BFA
            supports funds within the NBFN in more efficiently and effectively
            deploying bail funds to individuals in pretrial and immigration
            detention who could otherwise not afford it.
          </p>
      
          <p>
            As a tool, the BFA supports CJE’s work and goal to serve as a
            national hub for developing, sharing, and experimenting with
            tactical interventions, strategic organizing practices, and
            innovative organizing tools toward prison industrial complex
            abolition. By increasing the capacity of community bail funds in the
            NBFN, EW’s work furthers the work of CJE in providing support to
            community-based organizations that are experimenting with bottom-up,
            power-building interventions in the criminal legal and immigration
            detention systems.
          </p>
          </FeatureCard>
      </section>
      </section>
      <section className={cx('content')}>
      <h2>Thanks to our fantastic partners:</h2>
      <br />
        <div>
          <div className={styles.logoGroup}>
            {sponsors.map((logo) => (
              <div key={logo.id} className={styles.logoItem}>
                <Img fluid={logo.childImageSharp.fluid} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnersPage;
