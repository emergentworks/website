import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Hero } from '../components/Hero/Hero';

import styles from './products.module.scss';
import CtaLink from '../components/CtaLink/CtaLink';

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "products" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Products" />
      <div className={styles.root}>
        <Hero image={getImage(data.hero)} title="Movement Tech Solutions" />
        <div className="content">
          <h2>
            We understand that every organization has technological needs, but
            maybe not the resources to make those needs a reality. Emergent
            Works' technical team can build and support robust, custom technical
            solutions.
          </h2>
          <p>We help non-profits in the liberation space to...</p>
          <ul>
            <li>
              Answer questions about their data to support their on-the-ground
              organizing, fundraising, and advocacy work
            </li>
            <li>
              Choose and configure the best software that fits their
              organization's problems
            </li>
            <li>Move from paper to digital record-keeping</li>
            <li>
              Store and share organization information securely to protect
              client and staff privacy
            </li>
            <li>
              Build a website or blog to help share their organization's work
              more broadly
            </li>
            <li>
              Provide training for staff via our in-house technical education
              programs
            </li>
          </ul>
        </div>
        <div className={cx(styles.partnersFooter, 'content')}>
          <h2>
            We build the tech so movement orgs can focus on doing the work.
            Partner with us!
          </h2>
          <p>
            Are you an organization in need of a technical solution to support
            your movement?
          </p>
          <CtaLink href="https://airtable.com/appHQ4afO15UK9DwN/shrQsAFeo6QSRVsMH">
            Contact Us
          </CtaLink>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
