import React from 'react';
import cx from 'classnames';
import { graphql, Script } from 'gatsby';

import Grid, { GridItem } from 'components/Grid';
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
        <Grid gap={4}>
          <Grid col={2} gap={4}>
            <GridItem justify="left">
              <h2 className="mt--none">Support our work</h2>
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
              <div id="virtuous-form">
                <Script
                  id="analytics"
                  src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js"
                  data-vform="8cd72529-b118-4d39-99e1-45641cb119fc"
                  data-orgId="3675"
                  data-isGiving="true"
                  data-merchantType="Virtuous"
                />
              </div>

              {/* <h2 className="mt--none">Donate laptops</h2>

              {/* <p>
                All of our participants receive a laptop for the duration of the
                program. Support our students’ learning by donating gently used
                laptops!
              </p>

            <Button
                className="mt--lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSekRlaBYt0ILYZP90bJUiXfTf9fCl0brJwamNAgUoH1hIsZdg/viewform"
              >
                Donate laptops
              </Button>
              <StaticImage
                src="../_assets/images/laptop.png"
                alt="Donate laptops"
                className={styles.laptop}
                align="right"
              /> */}
            </GridItem>
          </Grid>
        </Grid>
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
