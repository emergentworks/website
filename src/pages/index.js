import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import ImageGrid from 'components/ImageGrid';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout className={styles.page}>
      <SEO title="Home" />
      <section className="content mb--xl">
        <h1 className={cx(styles.mainPageTitle, 'title')}>
          We are Emergent Works.
        </h1>
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
      </section>
      <section>
        <ul className={cx(styles.threeUpWrapper)}>
          <li className={styles.threeUpCard}>
            <Link to="/programs">
              <h2>Programs</h2>
              <span>Learn or teach with us</span>
            </Link>
          </li>
          <li className={styles.threeUpCard}>
            <Link to="/products">
              <h2>Products</h2>
              <span>We build tech to drive change</span>
            </Link>
          </li>
          <li className={styles.threeUpCard}>
            <Link to="/donate">
              <h2>Donate</h2>
              <span>Support our work</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className={cx(styles.imageGrid)}>
        <ImageGrid />
      </section>
    </Layout>
  );
};

export default IndexPage;
