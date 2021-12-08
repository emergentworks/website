import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';

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
        <h2 className={cx('content-max-width')}>Our Partners</h2>
        <div>
          <p>
            We believe that realizing our vision of creating life-changing
            impact for our communities through developing exceptional digital
            experiences and educational programming means partnering with
            inspiring organizations to catalyze our shared work. These are some
            of the incredible organizations with which we partner.
          </p>
        </div>
      </section>

      <br />

      <section className={cx('content')}>
        <div>
          <div className={styles.logoGroup}>
            {sponsors.map((logo) => (
              <div key={logo.id} className={styles.logoItem}>
                <Img
                  fluid={logo.childImageSharp.fluid}
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnersPage;
