import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import ImageGrid from 'components/ImageGrid';
// appears to be something to send user experience data to fullstory.com
// import '../components/fullstory.js';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout className={styles.page}>
      <SEO title="Home" />
      <section className="content">
        <div className={styles.gridContainer12}>
          <h1 className={cx(styles.gridCol12, styles.mainPageTitle, 'title')}>
            We are Emergent Works.
          </h1>
        </div>
        <div className="twoColumnLayout">
          <div className="leftColumn">
            <p>
              We are a community of software developers, designers, product
              specialists, and committed citizens working to build responsive
              software and community programs that address the most pressing
              challenges faced by organizations, and our society today.
            </p>
            <p>
              We envision a world where tech literacy, education, and
              skills-based training are freely available to the individuals and
              communities, disproportionately of color, impacted by mass
              incarceration.
            </p>
            <p>
              We realize this vision through our in-house software development
              agency and strategic educational programming that provides
              mentorship and a pathway to careers in tech to these communities.
            </p>
          </div>
          <div className="rightColumn">
            <div className="videoWrapper">
              <iframe
                title="Welcome to Emergent Works"
                src="https://player.vimeo.com/video/672029001"
                className="video"
                frameBorder="0"
                allow="autoplay; fullscreen"
              />
            </div>
          </div>
        </div>
        <section className={cx(styles.gridContainer12, 'content')}>
          <div className={styles.gridColLeft}>
            <h2 className="mt--xxl">Donations support our work.</h2>
            <Button to="/donate" className="mt--lg">
              Donate Now
            </Button>
          </div>
        </section>
      </section>

      <section className={cx(styles.imageGrid, 'mt--xxl', 'content')}>
        <ImageGrid />
      </section>
    </Layout>
  );
};

export default IndexPage;
