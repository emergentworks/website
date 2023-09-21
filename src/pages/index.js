import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '../components/Button';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={cx(styles.root)}>
        <section className={cx(styles.hero)}>
          <div className={cx(styles.heroContent)}>
            <h1 className="">
              Technology is our <span className={cx(styles.green)}>key</span>
            </h1>
            <h2>
              Together we decode the{' '}
              <span className={cx(styles.green)}>future</span>
            </h2>
          </div>
        </section>
        <section>
          <h3>Our Focus</h3>
          <div className={cx(styles.genericTwoUp)}>
            <div className={cx(styles.genericTwoUpCard)}>
              <p>
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
            <div className={cx(styles.genericTwoUpCard)}>
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
          <h3>Why We Do This Work</h3>
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
          <h3>Our Solution</h3>
          <ul className={cx(styles.twoUpCardWrapper)}>
            <li className={cx(styles.twoUpCard, styles.cardYellow)}>
              <Link to="/programs">
                <h3>Technical Programs</h3>
                <span>Innovative Technical Education and Mentorship</span>
              </Link>
            </li>
            <li className={cx(styles.twoUpCard, styles.cardPurple)}>
              <Link to="/products">
                <h3>Building Projects</h3>
                <span>
                  Movement Technical Solutions for Mission-Aligned Organizations
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <section className={cx(styles.heroWrapper)}>
          <h3>What Our Mentees Say</h3>
          <div className={cx(styles.genericTwoUp)}>
            <div className={cx(styles.genericTwoUpCard)}>
              <StaticImage
                src="../_assets/images/homepage/makeda.jpg"
                alt="Makeda, an EW mentee"
                cropFocus="attention"
                layout="fullWidth"
              />
            </div>
            <div className={cx(styles.genericTwoUpCard)}>
              <p>
                Together we decode the{' '}
                <span className={cx(styles.green)}>future</span>
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
          <h3>Unlock Futures With Us</h3>
          <div className={cx(styles.supportWrapper)}>
            <StaticImage
              src="../_assets/images/homepage/army-greeting.jpeg"
              alt="Members of the Emergent Works team"
              aspectRatio={4 / 3}
              layout="constrained"
              className={cx(styles.supportImage)}
              cropFocus="top"
              height={400}
            />
            <div className={cx(styles.supportContent)}>
              <p>
                Your contribution makes the world of a difference for our
                incredible community! Join our movement today & support our
                mission by donating, mentoring in our program or partnering with
                us!
              </p>
              <ul>
                <li>
                  <Link to="/donate">
                    <Button>Donate</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/programs">
                    <Button>Mentor</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <Button>Partner</Button>
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
