import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout';

import styles from './donate.module.scss';

const DonatePage = () => {
  return (
    <Layout className={styles.page}>
      <SEO title="Donate" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx('title', styles.pageTitle)}>
          Emergent Works interrupts the prison cycle by creating pathways into
          high-paying jobs in technology for formerly incarcerated people.
        </h1>
        <h2 className="mt--none">Support our work</h2>
        <p>
          <strong>$50 donations</strong> pay for chargers for donated laptops.
        </p>
        <p>
          <strong>$100 donations</strong> pay for guest speakers to teach
          workshops.
        </p>
        <p>
          <strong>$500 donations</strong> pay for learning stipends for our
          participants.
        </p>
        <p>Anything you can give helps tremendously!</p>
        <iframe
          src="/virtuous-form.html"
          id="virtuous-form"
          title="Virtuous Donate Form"
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    Laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        id
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default DonatePage;
