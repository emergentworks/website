import cx from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/Layout';
import PartnersModule from '../components/PartnersModule';
import SEO from '../components/seo';
import styles from './index-new.module.scss';

const IndexPage2 = () => {
  return (
    <Layout className="">
      <SEO title="Home" />
      <section className={cx(styles.heroWrapper)}>
        <div className={cx(styles.heroCopy)}>
          <h1 className="">We are Emergent Works.</h1>
          <p>
            "When I was finally released from my 9.5 year prison sentence, many
            employers would not hire me. I knew I wanted to become a software
            engineer but I needed extra help. The dedication, time, resources,
            equipment, emotional support and financial support from Emergent
            Works is the biggest reason I was able to see this through. Today I
            can proudly say I am a thriving Software Engineer." - Makeda, EW
            2020 Winter Mente
          </p>
        </div>
        <div className={cx(styles.heroImage)}>
          <StaticImage
            src="../_assets/images/home-page-grid/grant-announcement.png"
            alt="Members of the Emergent Works team"
          />
        </div>
      </section>
      <section className={cx(styles.threeUpCardWrapper)}>
        <div>
          <StaticImage
            src="../_assets/images/team-core/placeholder.png"
            alt="Members of the Emergent Works team"
            aspectRatio={1}
            layout="constrained"
            // cropFocus="attention"
            className={cx(styles.cardImageRound)}
          />
          <span>
            Maria: One of the skills I learned through the mentorship with
            Emergent Works was gaining confidence in coding. Before EW, I was a
            computer science student with imposter syndrome because of my age
            and background. This community made me blossom out of my shell by
            producing an actual project I was able to talk about during
            interviews. As a result, I landed an internship and eventually a
            full-time job with The Walt Disney Company. Awesome program!
          </span>
        </div>
        <div>
          <StaticImage
            src="../_assets/images/team-core/placeholder.png"
            alt="Members of the Emergent Works team"
            aspectRatio={1}
            layout="constrained"
            // cropFocus="attention"
            className={cx(styles.cardImageRound)}
          />
          <span>
            Maria: One of the skills I learned through the mentorship with
            Emergent Works was gaining confidence in coding. Before EW, I was a
            computer science student with imposter syndrome because of my age
            and background. This community made me blossom out of my shell by
            producing an actual project I was able to talk about during
            interviews. As a result, I landed an internship and eventually a
            full-time job with The Walt Disney Company. Awesome program!
          </span>
        </div>
        <div>
          <StaticImage
            src="../_assets/images/team-core/placeholder.png"
            alt="Members of the Emergent Works team"
            aspectRatio={1}
            layout="constrained"
            // cropFocus="attention"
            className={cx(styles.cardImageRound)}
          />
          <span>
            Maria: One of the skills I learned through the mentorship with
            Emergent Works was gaining confidence in coding. Before EW, I was a
            computer science student with imposter syndrome because of my age
            and background. This community made me blossom out of my shell by
            producing an actual project I was able to talk about during
            interviews. As a result, I landed an internship and eventually a
            full-time job with The Walt Disney Company. Awesome program!
          </span>
        </div>
      </section>
      <section>
        <ul className={cx(styles.twoUpCardWrapper)}>
          <li className={styles.twoUpCard}>
            <Link to="/programs">
              <h3>Our Programs</h3>
              <span>Learn or teach with us</span>
            </Link>
          </li>
          <li className={styles.twoUpCard}>
            <Link to="/products">
              <h3>Our Projects</h3>
              <span>We build tech to drive change</span>
            </Link>
          </li>
        </ul>
      </section>
      <PartnersModule />
    </Layout>
  );
};

export default IndexPage2;
