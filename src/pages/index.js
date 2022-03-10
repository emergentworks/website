import React from 'react';
import { Link } from 'gatsby';
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
        <div>
          <h2 className={styles.pageTitle}>
            We are a community of software engineers, designers, product and
            program specialists that develops community-driven solutions (our
            programs) and software (our products) to address one of the most
            pressing challenges faced by our society today: mass incarceration.
          </h2>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Welcome to Emergent Works"
            src="https://player.vimeo.com/video/672029001?title=0&byline=0&portrait=0&color=00e461"
            className="video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
        <section>
          <div>
            <h2 className="mt--xxl">Our Products:</h2>
            <ul>
              <Link className={styles.link} to="/products">
                <li className={styles.box}>Not911</li>
              </Link>
              <Link className={styles.link} to="/products">
                <li className={styles.box}>BFA</li>
              </Link>
              <Link className={styles.link} to="/products">
                <li className={styles.box}>CCH</li>
              </Link>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2 className="mt--xxl">Our Programs:</h2>
            <ul>
              <Link className={styles.link} to="/programs">
                <li className={styles.box}>1:1 Virtual Tech Mentorship</li>
              </Link>
              <Link className={styles.link} to="/programs">
                <li className={styles.box}>TRAP</li>
              </Link>
              <Link className={styles.link} to="/programs">
                <li className={styles.box}>LEAP</li>
              </Link>
            </ul>
          </div>
        </section>
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
