import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import styles from './programs.module.scss';
import { Hero } from '../components/Hero/Hero';

const ProgramsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "programs" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <Layout className={styles.page}>
      <SEO title="Programs" />
      <div className={cx(styles.root)}>
        <Hero image={getImage(data.hero)} title="Our Programs" />
        <section>
          <p>
            We imagine a world where technical education unlocks equitable
            economic mobility for system impacted communities
          </p>
          <div className="twoUp">
            {/* <div className="twoUpCard"></div> */}
            <div className="twoUpCard">
              <h2>Technical Education Programming</h2>
              <p>
                Emergent Works trains formerly incarcerated and those impacted
                by the criminal legal system through technical programming that
                provides free access to education, resources, a safe community,
                and employment opportunities; in hopes of ending the revolving
                door of mass incarceration and closing the wealth gap and
                digital divide.
              </p>

              <p>
                Our three programs caters to different needs as well as various
                learning levels.{' '}
              </p>
              <ul>
                <li>In-person Program (BTTB)</li>
                <li>Virtual Program (1:1 Technical Mentorship)</li>
                <li>Apprenticeship (LEAP) </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our various programs </h2>
          {/* <ProgramCard title="Bigger Than The Block" to=""></div> */}
          {/* <div className="twoUpCard"></div> */}
        </section>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
