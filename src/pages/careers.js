import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Button from 'components/Button';
import styles from './team.module.scss';

const TeamPage = () => {

  return (
    <Layout className={styles.page}>
      <SEO title="Team" />
      <div className={cx(styles.root, 'content')}>
        <section className={cx(styles.gridContainer12, 'content')}>
          <h1 className={cx('title', 'content-max-width')}>
            We are the Emergent Works Family.
          </h1>
          <div>
            <p>
              We believe that developing software and educational programming
              that is responsive to the problems our clients and society face,
              necessitates that our team be representative of the diverse range
              of perspectives in the world. Having team members with direct
              lived experience with the problems we solve for our clients and
              communities allows us to build products and programs that are both
              inclusive and sensitive to the lives of the people that interact
              with and are impacted by them.
            </p>
          </div>
        </section>


        <section className={cx(styles.gridContainer12, 'content')}>
          <h2 className={cx('content-max-width')}>We're Hiring</h2>
          <div>
            <p>
              We're always looking for highly-motivated, mission-driven people
              to join our team.
            </p>
            <Button
              to="https://boards.greenhouse.io/emergentworks"
              className="mt--lg"
            >
              See open roles
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
