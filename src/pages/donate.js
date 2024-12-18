import React from 'react';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import { Hero } from '../components/Hero/Hero';

import styles from './donate.module.scss';

const DonatePage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "donate" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <script src="https://widgets.givebutter.com/latest.umd.cjs?acct=Dmyv83PBiHwhPXgd&p=other" />
      </Helmet>
      <SEO title="Donate" />
      <Hero image={getImage(data.hero)} title="Your Support" />
      <div className={cx(styles.root, 'page-content')}>
        <section>
          <p className={cx(styles.prominent, 'tc')}>
            It only takes <span>$500</span> to support a mentee to gain
            high-value technical skills in our technical mentorship program
          </p>
          <div className="twoUp">
            <div className="twoUpCard">
              <p>
                Learning is at the pillar of Emergent Works and we always want
                to acknowledge the dedication each mentee takes to grow and
                elevate their future. With your support, our mentees obtain
                stipends while learning over the course of the program.
              </p>
              <ul>
                <li>
                  <span className="fwb">$15</span> covers one mentee's monthly
                  wifi access
                </li>
                <li>
                  <span className="fwb">$50</span> covers one mentee weekly
                  learning stipend for our in-person T.RAP program
                </li>
                <li>
                  <span className="fwb">$150</span> covers meals and learning
                  for 10 in-person T.RAP mentees
                </li>
                <li>
                  <span className="fwb">$500</span> covers one mentee learning
                  stipend for our TECK digital literacy cohort
                </li>
              </ul>
            </div>
            <div className="twoUpCard">
              <div className={cx(styles.donationWidgetWrapper)}>
                <givebutter-widget id="jNOdoL" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DonatePage;
