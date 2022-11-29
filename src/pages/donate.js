import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import Grid, { GridItem } from 'components/Grid';
import SEO from '../components/seo';
import Button from '../components/Button';
import Layout from '../components/Layout';

import styles from './donate.module.scss';

const scriptId = '8cd72529-b118-4d39-99e1-45641cb119fc';
const DonatePage = ({ path }) => {
  const [_isLoaded, setIsLoaded] = useState(false);
  console.log(path);
  const loadVirtuousForm = () => {
    console.log('load form');
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = 'https://cdn.virtuoussoftware.com/virtuous.embed.min.js';
    tag.setAttribute('data-vform', scriptId);
    tag.setAttribute('data-orgId', '3675');
    tag.setAttribute('data-isGiving', 'true');
    tag.setAttribute('data-merchantType', 'Virtuous');
    const container = document.querySelector('#virtuous-form');
    container.appendChild(tag);
  };

  useEffect(() => {
    loadVirtuousForm();
    if (!document.getElementById(scriptId)) {
      loadVirtuousForm();
    } else {
      setIsLoaded(true);
    }
  }, [path]);

  return (
    <Layout className={styles.page}>
      <SEO title="Donate" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx('title', styles.pageTitle)}>
          Emergent Works interrupts the prison cycle by creating pathways into
          high-paying jobs in technology for formerly incarcerated people.
        </h1>
        <Grid gap={4}>
          <Grid col={2} gap={4}>
            <GridItem justify="left">
              <h2 className="mt--none">Support our work</h2>
              <Link to="#virtuous-form">
                <Button>Donate Now</Button>
              </Link>
              <p>
                <strong>$50 donations</strong> pay for chargers for donated
                laptops.
              </p>
              <p>
                <strong>$100 donations</strong> pay for guest speakers to teach
                workshops.
              </p>
              <p>
                <strong>$500 donations</strong> pay for learning stipends for
                our participants.
              </p>
              <p>Anything you can give helps tremendously!</p>
              <div id="virtuous-form" />
            </GridItem>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   {
//     Laptop: file(relativePath: { eq: "laptop.png" }) {
//       childImageSharp {
//         id
//         gatsbyImageData(layout: FULL_WIDTH)
//       }
//     }
//   }
// `;

export default DonatePage;
