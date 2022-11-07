import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index-new.module.scss';

const IndexPage2 = () => {
  return (
    <Layout className="">
      <SEO title="Home" />
      {/* <section className={cx(styles.heroWrapper)}>
        <div>
          <h1 className="">We are Emergent Works.</h1>
        </div>

        <StaticImage
          src="..src/_assets/images/team-core/placeholder.png"
          alt="Members of the Emergent Works team"
            aspectRatio={1}
          layout="constrained"
            cropFocus="attention"
          className={cx(styles.heroImage)}
        />
      </section> */}
      <section className={cx(styles.threeUpCardWrapper)}>
        <div>
          <StaticImage
            src="..src/_assets/images/team-core/placeholder.png"
            alt="Members of the Emergent Works team"
            aspectRatio={1}
            layout="constrained"
            cropFocus="attention"
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
            cropFocus="attention"
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
    </Layout>
  );
};

export default IndexPage2;
