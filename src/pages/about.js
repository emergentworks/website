import React from 'react';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import { Hero } from '../components/Hero/Hero';

import styles from './about.module.scss';

const DonatePage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "about" }) {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 3
            layout: FULL_WIDTH
            transformOptions: { cropFocus: NORTHWEST }
          )
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Donate" />
      <Hero image={getImage(data.hero)} title="About Our Organization" />
      <div className={cx(styles.root, 'page-content')}>
        <section>
          <div className="twoUp">
            <div className="twoUpCard">
              <div className={cx(styles.title)}>
                <h2>
                  "I am living proof that
                  <br />
                  tech is a vehicle for freedom."
                </h2>
                <span className={cx(styles.prominent)}>
                  Khalil 'Army' Armstead
                </span>
                <span className={cx(styles.subheading)}>
                  Executive Director
                </span>
              </div>
              <p>
                Growing up as a Black man in New York City, I’ve always wanted
                to serve. With a background in ministry and music, I’m acutely
                aware that marginalized people need safe spaces to be heard.
                With my first-hand experience and success in utilizing the
                elements of my lived experiences, I’ve learned the importance of
                healing, redemption, and liberation through technology.
                Overcoming my experiences with the justice system through faith
                and resilience shaped me into a steadfast champion of mental
                health awareness and a strong proponent of community-led
                solutions.
              </p>
              <p>
                Introduced to EW in 2019 (formerly Code Cooperative), I
                successfully enrolled and completed the 16-week cohort. My
                greatest takeaway from this experience was discovering a safe
                community, allowing me to be transparent, grow, and use my lived
                experiences to succeed. After twelve weeks into the program and
                the determination to succeed, I became the first employee and
                operations manager for Code Cooperative. I oversaw and designed
                new programs for communities impacted by mass incarceration.
                Less than a year later, I am proud to say that I became
                Executive Director of Emergent Works and launched our 1:1
                Technical Mentorship Program. Tech really did transform my life,
                and with Emergent Works it is my mission to pave that forward to
                the next person.
              </p>
            </div>
            <div className="twoUpCard">
              <StaticImage
                src="../_assets/images/team-core/army_armstead.jpg"
                alt="Army, Executive Director of Emergent Works"
                cropFocus="attention"
                layout="fullWidth"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DonatePage;
