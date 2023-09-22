import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import CtaLink from '../components/CtaLink/CtaLink';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={cx(styles.root)}>
        <div className={cx(styles.hero)}>
          <div className={cx(styles.heroContent)}>
            <h1>
              Technology is our <span className={cx(styles.green)}>key</span>
              <br />
              Together we decode the{' '}
              <span className={cx(styles.green)}>future</span>
            </h1>
          </div>
        </div>
        <section>
          <h2>Our Focus</h2>
          <div className={cx(styles.twoUp)}>
            <div className={cx(styles.twoUpCard)}>
              <p className={cx(styles.prominent)}>
                We imagine a world where tech literacy, education, skills-based
                training, and employment opportunities are free and available to
                communities impacted by mass incarceration
              </p>
              <p>
                Emergent Works fights to end mass incarceration through both
                technical education and movement technical support. Our unique
                holistic and trauma-informed approach offers a comprehensive
                blend of technical education, skills training, one-on-one
                mentorship, and employment opportunities to individuals who have
                been impacted by the criminal legal system. We additionally are
                also committed to creating tech solutions that serve
                organizations working to end mass incarceration.
              </p>
            </div>
            <div className={cx(styles.twoUpCard)}>
              <StaticImage
                src="../_assets/images/homepage/our-focus.jpg"
                alt="Mentorship Program participants"
                cropFocus="attention"
                layout="fullWidth"
              />
            </div>
          </div>
        </section>
        <section>
          <h2>Why We Do This Work</h2>
          <div className={cx(styles.threeUpCardWrapper)}>
            <div className={cx(styles.statistics)}>
              The average U.S recidivism rate is <span>44%</span>. EW's alumni
              recidivism rate is <span>0%</span>.
            </div>
            <div className={cx(styles.statistics)}>
              The formerly-incarcerated employment rate nationwide is{' '}
              <span>40%</span>. The employment rate for EW program alumni is{' '}
              <span>74%</span>
            </div>
            <div className={cx(styles.statistics)}>
              Formerly-incarcerated income averages <span>+$10K</span> annually.
              EW program alumni annual incomes average <span>+$45K</span>.
            </div>
          </div>
          <p className={cx(styles.legal)}>
            * Employment and recidivism statistics from our 1:1 Digital
            Mentorship Program mentees (2019-2023), based on available data.
          </p>
        </section>
        <section>
          <h2>Our Solution</h2>
          <div
            className={cx(
              styles.twoUp,
              styles.fullbleed,
              styles.solutionsBlock
            )}
          >
            <div className={cx(styles.twoUpCard)}>
              <div className={cx(styles.solutionsCard)}>
                <h3>Technical Programs</h3>
                <span>
                  Innovative Technical Education
                  <br />
                  and Mentorship
                </span>
                <Link to="/programs">
                  <CtaLink>Learn More</CtaLink>
                </Link>
              </div>
            </div>
            <div className={cx(styles.twoUpCard)}>
              <div className={cx(styles.solutionsCard)}>
                <h3>Building Projects</h3>
                <span>
                  Movement Technical Solutions
                  <br /> for Mission-Aligned Organizations
                </span>
                <Link to="/programs">
                  <CtaLink>Learn More</CtaLink>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>What Our Mentees Say</h2>
          <div className={cx(styles.twoUp)}>
            <div className={cx(styles.twoUpCard)}>
              <StaticImage
                src="../_assets/images/homepage/makeda.jpg"
                alt="Makeda, an EW mentee"
                cropFocus="attention"
                layout="fullWidth"
              />
            </div>
            <div className={cx(styles.twoUpCard)}>
              <p className={cx(styles.prominent)}>
                Emergent Works is the biggest reason I was able to see this
                through
              </p>
              <p>
                When I was finally released from my 9.5 year prison sentence,
                many employers would not hire me. I knew I wanted to become a
                software engineer but I needed extra help. The dedication, time,
                resources, equipment, emotional support and financial support
                from Emergent Works is the biggest reason I was able to see this
                through. Today I can proudly say I am a thriving Software
                Engineer.
                <p>- Makeda, EW 2021 Cohort</p>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={cx(styles.ctaBlock, styles.fullbleed)}>
            <div className={cx(styles.heroContent)}>
              <h2>Unlock Futures With Us</h2>
              <p>
                Your contribution makes the world of a difference for our
                incredible community! Join our movement today and support our
                mission by donating, mentoring in our program or partnering with
                us!
              </p>
              <ul className={cx(styles.ctaButtonGroup)}>
                <li>
                  <Link to="/donate">
                    <CtaLink>Donate</CtaLink>
                  </Link>
                </li>
                <li>
                  <Link to="/programs">
                    <CtaLink>Mentor</CtaLink>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <CtaLink>Partner</CtaLink>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
