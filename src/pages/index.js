import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import cx from 'classnames';
import { StaticImage, getImage } from 'gatsby-plugin-image';

import CtaLink from '../components/CtaLink/CtaLink';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';
import { Hero } from '../components/Hero/Hero';
import { PartnersModule } from '../components/PartnersModule/PartnersModule';

const IndexPage = () => {
  // TODO: This could be refactored into Gatsby page queries to DRY up code.

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "homepage" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className={cx(styles.root)}>
        <Hero image={getImage(data.hero)} title="Title">
          <h1 className={cx(styles.hero, 'cornerBordersHero')}>
            Technology is our <span className={cx(styles.green)}>key</span>
            <br />
            Together we decode the{' '}
            <span className={cx(styles.green)}>future</span>
          </h1>
        </Hero>
        <div className="page-content">
          <section>
            <h2 className="cornerBorders">Our Focus</h2>
            <div className="twoUp">
              <div className="twoUpCard">
                <p className={cx(styles.prominent)}>
                  We imagine a world where tech literacy, education,
                  skills-based training, and employment opportunities are free
                  and available to communities impacted by mass incarceration
                </p>
                <p>
                  Emergent Works fights to end mass incarceration through both
                  technical education and movement technical support. Our unique
                  holistic and trauma-informed approach offers a comprehensive
                  blend of technical education, skills training, one-on-one
                  mentorship, and employment opportunities to individuals who
                  have been impacted by the criminal legal system. We
                  additionally are also committed to creating tech solutions
                  that serve organizations working to end mass incarceration.
                </p>

                {/* Call for mentors */}
                {/* <p className={cx(styles.announcement)}>
                  Ready to make a difference? Our Spring 1:1 Digital Literacy
                  Mentorship cohort begins February 26th and we are still
                  seeking volunteer mentors to help us make a profound change in
                  the lives of returning citizens!
                </p>

                <div className={cx(styles.heroCta)}>
                  <Link href="https://airtable.com/apparGbIS7FxQJM4M/shrToEfXoVDu63iES">
                    <CtaLink>Become a Mentor today!</CtaLink>
                  </Link>
                </div> */}
              </div>
              <div className="twoUpCard">
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
            <h2 className="cornerBorders">Why We Do This Work</h2>
            <div
              className={cx(
                'threeUp',
                styles.statisticsCardGroup,
                styles.statisticInitial
              )}
            >
              <div className={cx('threeUpCard', styles.statisticsCard)}>
                <span>Average U.S recidivism rate</span>
                <span className={cx(styles.statistic)}>44%</span>
              </div>
              <div
                className={cx(
                  'threeUpCard',
                  styles.statisticsCard,
                  styles.statisticInitial
                )}
              >
                <span>Formerly-incarcerated employment rate</span>
                <span className={cx(styles.statistic)}>40%</span>
              </div>
              <div
                className={cx(
                  'threeUpCard',
                  styles.statisticsCard,
                  styles.statisticInitial
                )}
              >
                <span>Formerly-incarcerated annual income</span>
                <span className={cx(styles.statistic)}>+$10K</span>
              </div>
              <div
                className={cx(
                  'threeUpCard',
                  styles.statisticsCard,
                  styles.statisticEW
                )}
              >
                <span>EW Alumni recidivism rate</span>
                <span className={cx(styles.statistic)}>0%</span>
              </div>
              <div
                className={cx(
                  'threeUpCard',
                  styles.statisticsCard,
                  styles.statisticEW
                )}
              >
                <span>EW Alumni employment rate</span>
                <span className={cx(styles.statistic)}>74%</span>
              </div>
              <div
                className={cx(
                  'threeUpCard',
                  styles.statisticsCard,
                  styles.statisticEW
                )}
              >
                <span>Employed EW Alumni annual income</span>
                <span className={cx(styles.statistic)}>+$45K</span>
              </div>
            </div>
          </section>
          <section>
            <h2 className="cornerBorders">Our Solution</h2>
            <div
              className={cx('twoUp', styles.fullbleed, styles.solutionsBlock)}
            >
              <div className="twoUpCard">
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
              <div className="twoUpCard">
                <div className={cx(styles.solutionsCard)}>
                  <h3>Building Products</h3>
                  <span>
                    Movement Technical Solutions
                    <br /> for Mission-Aligned Organizations
                  </span>
                  <Link to="/products">
                    <CtaLink>Learn More</CtaLink>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="cornerBorders">What Our Mentees Say</h2>
            <div className={cx(styles.menteeBlock, 'twoUp')}>
              <div className="twoUpCard">
                <StaticImage
                  src="../_assets/images/homepage/makeda.jpg"
                  alt="Makeda, an EW mentee"
                  cropFocus="attention"
                  layout="fullWidth"
                />
              </div>
              <div className="twoUpCard">
                <p className={cx(styles.prominent, 'tr')}>
                  <br />
                  Emergent Works is the biggest reason
                  <br />I was able to see this through
                </p>
                <p className={cx(styles.cornerBorders, styles.quote)}>
                  When I was finally released from my 9.5 year prison sentence,
                  many employers would not hire me. I knew I wanted to become a
                  software engineer but I needed extra help. The dedication,
                  time, resources, equipment, emotional support and financial
                  support from Emergent Works is the biggest reason I was able
                  to see this through. Today I can proudly say I am a thriving
                  Software Engineer.
                </p>
                <p className={cx(styles.attribution, 'tr')}>
                  - Makeda, EW 2021 Cohort
                </p>
                <div className="tc mb--sm">
                  <Link to="/passion-projects">
                    <CtaLink>See Our Mentee Projects</CtaLink>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className={cx(styles.ctaBlock, styles.fullbleed)}>
              <div className={cx(styles.heroContent)}>
                <h2>Unlock Futures With Us</h2>
                <p>
                  Your contribution makes the world of a difference for our
                  incredible community! Join our movement today and support our
                  mission by donating, mentoring in our program or partnering
                  with us!
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
          <section>
            <h2 className="cornerBorders">Our Community Partners</h2>
            <PartnersModule />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
