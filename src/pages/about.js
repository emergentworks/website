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
            <div className={cx(styles.about, 'twoUpCard')}>
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
                As a Black man and native of New York City, my lifelong desire
                has been to impact my community positively. Drawing from my
                background in ministry and music, I've recognized the pressing
                need for safe spaces where marginalized voices can be heard.
                Through my journey, I’ve understood the profound importance of
                healing, redemption, and liberation through technology.
              </p>
              <p>
                My introduction to Emergent Works (formerly Code Cooperative) in
                2019 marked a pivotal moment. I not only enrolled in but
                successfully completed the intensive 16-week cohort. What
                resonated with me most was the discovery of a nurturing
                community where transparency, growth, and leveraging our lived
                experiences were encouraged while we learned how to code. Twelve
                weeks into the program, driven by determination, I proudly
                became the first employee and Operations Manager for Code
                Cooperative. In this role, I spearheaded the development of our
                innovative Virtual Technical Mentorship programs tailored to
                communities affected by mass incarceration. Less than a year
                later, I assumed the position of Executive Director at Emergent
                Works.
              </p>
              <p>
                In the initial stages, I was the sole staff member at Emergent
                Works, a challenging but invigorating role. I navigated the
                complex landscape of securing funding, assembling a team from
                the ground up, and laying the foundation for Emergent Works.
                Today, I am immensely proud of our accomplishments. We've
                expanded our program offerings by an impressive 600%, reaching
                three times as many mentees nationwide. In addition to our
                technical education programs, EW is committed to creating tech
                solutions that serve organizations working to end mass
                incarceration. Our engineering team serves as an education
                continuum while creating technical solutions for community-based
                organizations working on various efforts to confront the
                criminal legal system and its impact on Black and Brown
                communities. I’m honored to share that 69% of our team are
                individuals directly impacted by the criminal legal system, and
                58% are former program mentees.
              </p>
              <p>
                Re-entering a world that has undergone emotional, social,
                professional, and digital transformations can be daunting. This
                realization is the driving force behind Emergent Works' mission.
                We actively work to narrow the divide between the tech industry
                and individuals with prior incarceration experiences by arming
                them with essential technical skills. Our steadfast conviction
                is that this connection can offer the vital support and
                resources necessary for achieving economic stability,
                self-reliance, and a significant decrease in reoffending.
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
