import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import ImageGrid from 'components/ImageGrid';
import Img from 'gatsby-image';
// appears to be something to send user experience data to fullstory.com
// import '../components/fullstory.js';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      companies: file(relativePath: { eq: "companies.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metrocard: file(relativePath: { eq: "metrocard.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout
      className={styles.page}
      // banner={
      //   <div className="content">
      //     Code Cooperative is now Emergent Works.{' '}
      //     <Link to="/news/we-are-emergent-works">Learn more</Link>
      //   </div>
      // }
    >
      <SEO title="Home" />
      <section className="content">
        <div className={styles.gridContainer12}>
          <h1 className={cx(styles.gridCol12, styles.mainPageTitle, 'title')}>
            We are Emergent Works.
          </h1>
        </div>
        <div className={cx('content-max-width')}>
          {/* <h2 className={styles.gridColLeft}>
            Black and Latinx people make up 32% of the US population and 50% of
            the prison population, but{' '}
            <span className={cx('bold', styles.squigglyUnderline)}>
              only 15% of the tech workforce.
            </span>
          </h2> */}
          <div>
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
        </div>
        {/* <div className={styles.gridContainer12}>
          <h2 className={cx(styles.gridColRight, 'mt--lg')}>
            Clients work with us to build their software and correct this imbalance.
            <Button
              className="mt--lg"
              to="/agency#leadForm">
              Let's chat
            </Button>
          </h2>
        </div> */}

        {/* TODO: update video to reflect EW rather than CC */}
        <div
          className="mt--xl"
          style={{ padding: '56.25% 0 0 0', position: 'relative' }}
        >
          <iframe
            title="Welcome"
            src="https://player.vimeo.com/video/335249244?autoplay=1&title=0&byline=0&portrait=0&muted=1&loop=1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
        {/* <div className={styles.gridContainer12}>
          <h2 className={cx(styles.gridCol11, 'mt--xxl')}>
            Emergent Works interrupts the prison cycle by creating pathways into
            high-paying jobs in technology for formerly incarcerated people.
          </h2>
        </div> */}
        <section className={cx(styles.gridContainer12, 'content')}>
          <div className={styles.gridColLeft}>
            {/* <h2 className="mt--xxl">
            We are a nonprofit software company that trains and employs formerly
            incarcerated people.
          </h2>
          <p className="mt--lg">
            Through our client projects, our formerly incarcerated apprentices
            get valuable paid work experience to kickstart their careers in
            tech.
          </p> */}
            <h2 className="mt--xxl">Donations support our work.</h2>
            <Button to="/donate" className="mt--lg">
              Donate Now
            </Button>
            {/* <p className="mt--lg">
            Donations help us cover our program costs: instructors, space, food,
            learning supplies, hardware, software, and MetroCards. You can also
            support our students by donating gently used laptops!
          </p>

        </div>
        <div className={styles.gridColRight}>
          <Img
            className={styles.metrocard}
            fluid={data.metrocard.childImageSharp.fluid}
            alt="Metrocard"
          /> */}
          </div>
        </section>
      </section>

      <section className={cx(styles.imageGrid, 'mt--xxl')}>
        <ImageGrid />
      </section>

      <h3 className={styles.companies}>
        <Img
          fluid={data.companies.childImageSharp.fluid}
          alt="KICKSTARTER · BITLY · YIELDMOÉ GIPHY · DROPBOX · CONDÉ NAST BOX · NEARFORM · AXIOS · GROUP NINE MEDIA · FLAWLESS RIPPLEMATCH · SPRINKLR"
        />
      </h3>
    </Layout>
  );
};

export default IndexPage;
