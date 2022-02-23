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
      <SEO title="Careers" />
      <div className={cx(styles.root, 'content')}>
        <section className={cx(styles.gridContainer12, 'content')}>
          <h1 className={cx('title', 'content-max-width')}>Careers</h1>
          <div>
            <p>
              Are you tired of working on problems with solutions that don’t
              drive positive social change? Do you want to work with a group of
              people as diverse and interesting as the world we live in? Then
              come join us at Emergent Works!
            </p>
            <p>
              We’re solving one of the world’s most pressing problems––mass
              incarceration––by assembling a world-class community and team that
              brings their diverse perspectives and full selves to the products
              and programs we build.
            </p>
            <p>
              If you’re interested in joining us to make the world a better
              place while loving the work you do, check out our open roles
              below. We can’t wait to learn about the experiences, talents, and
              perspectives you’ll bring to the team!
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
