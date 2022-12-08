import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '../components/Button';
import Layout from '../components/Layout';
import PartnersModule from '../components/PartnersModule';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={cx(styles.root)}>
        <section className={cx(styles.heroWrapper)}>
          <div className={cx(styles.heroCopy)}>
            <h1 className="">Technology is our key.</h1>
            <h2>
              Together we <span className={cx(styles.green)}>decode</span>{' '}
              economic freedom.
            </h2>
            <p>
              “When I was finally released from my 9.5 year prison sentence,
              many employers would not hire me. I knew I wanted to become a
              software engineer but I needed extra help. The dedication, time,
              resources, equipment, emotional support and financial support from
              Emergent Works is the biggest reason I was able to see this
              through. Today I can proudly say I am a thriving Software
              Engineer.”
              <p>- Makeda, EW 2020 Winter Mentee</p>
            </p>
            <Link to="/programs">
              <Button>Learn more about our mentorship programs</Button>
            </Link>
          </div>
          <div className={cx(styles.heroImage)}>
            <StaticImage
              src="../_assets/images/homepage/makeda.jpg"
              alt="Makeda, an EW mentee"
              cropFocus="attention"
              layout="fullWidth"
            />
          </div>
        </section>
        <section>
          <h3>What Are Our Mentees Saying?</h3>
          <div className={cx(styles.threeUpCardWrapper)}>
            <div>
              <StaticImage
                src="../_assets/images/homepage/Maria.jpg"
                alt="Maria, an EW mentee"
                aspectRatio={1}
                layout="constrained"
                className={cx(styles.cardImageRound)}
              />
              <span className={cx(styles.name)}>Maria</span>
              <span>
                One of the skills I learned through the mentorship with Emergent
                Works was gaining confidence in coding. Before EW, I was a
                computer science student with imposter syndrome because of my
                age and background. This community made me blossom out of my
                shell by producing an actual project I was able to talk about
                during interviews. As a result, I landed an internship and
                eventually a full-time job with The Walt Disney Company. Awesome
                program!
              </span>
            </div>
            <div>
              <StaticImage
                src="../_assets/images/homepage/Wayne.jpg"
                alt="Wayne, an EW mentee"
                aspectRatio={1}
                layout="constrained"
                className={cx(styles.cardImageRound)}
              />
              <span className={cx(styles.name)}>Wayne</span>
              <span>
                EW gave me the confidence and tools to sharpen my Python and SQL
                skills needed to reach my dream of working with data in the tech
                industry! My mentor is continuously supporting me to develop my
                skills to reach my dream career!
              </span>
            </div>
            <div>
              <StaticImage
                src="../_assets/images/homepage/Latonia.jpeg"
                alt="La'Tonia, an EW mentee"
                aspectRatio={1}
                layout="constrained"
                className={cx(styles.cardImageRound)}
              />
              <span className={cx(styles.name)}>La’Tonia</span>
              <span>
                Enhanced productive communication, advanced professional
                development resources, and a quest to push boundaries of
                commonly accepted standards are among skills I’ve gained from
                Emergent Works. These skills help by positioning me at an
                advantage as I continue my code/web dev journey - and the
                advantage includes appreciation for possibilities to come, which
                feeds in me an eagerness to bring my best. For my life, this
                translates to being a presence in the world who is more
                confident, eager to engage calculated risks, and unapologetic in
                pure curiosity.
              </span>
            </div>
          </div>
        </section>
        <section>
          <h3>Our Impact</h3>
          <div className={cx(styles.threeUpCardWrapper)}>
            <div className={cx(styles.statistics)}>
              <span>107</span> mentee graduates. <span>100%</span> employed or
              continuing their education. <span>0%</span> recidivism.*
            </div>
            <div className={cx(styles.statistics)}>
              Graduates of EW earn more than <span>3X</span> the salary of
              average formerly-incarcerated people.
            </div>
            <div className={cx(styles.statistics)}>
              <span>54%</span> of the EW team are graduates of our programs.{' '}
              <span>69%</span> are justice-impacted or system-impacted.*
            </div>
          </div>
          <p className={cx(styles.legal)}>
            * Employment and recidivism statistics from our 1:1 Digital
            Mentorship Program mentees (2019-2022), based on available data.
          </p>
        </section>
        <section>
          <h3>Support the Movement</h3>
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
                Training and employing returning citizens and those impacted by
                the criminal legal system through tech literacy with an effort
                to decrease recidivism and close the wealth gap.
              </p>
            </div>
          </div>
        </section>
        <section>
          <ul className={cx(styles.twoUpCardWrapper)}>
            <li className={cx(styles.twoUpCard, styles.cardYellow)}>
              <Link to="/programs">
                <h3>Our Programs</h3>
                <span className={cx(styles.hideOnDesktop)}>
                  Learn or teach with us
                </span>
                <span className={cx(styles.hideOnMobile)}>
                  We provide pathways to technology literacy and gainful
                  employment in a dynamic, trauma-informed format that puts our
                  mentees first. From our flagship 1:1 Digital Mentorship
                  program to our T.RAP program, Emergent Works is here to be
                  your key to a brighter future.
                </span>
              </Link>
            </li>
            <li className={cx(styles.twoUpCard, styles.cardPurple)}>
              <Link to="/products">
                <h3>Our Projects</h3>
                <span className={cx(styles.hideOnDesktop)}>
                  We build tech to drive social change
                </span>
                <span className={cx(styles.hideOnMobile)}>
                  From community-borne projects developed in solidarity with our
                  constituency to enterprise-level application development,
                  Emergent Works is a premier technology partner for your
                  mission-aligned project.
                </span>
              </Link>
            </li>
          </ul>
        </section>
        {/* <section>
          <PartnersModule
            isLimited
            heading={<h3>Our Partners</h3>}
            subheading={
              <p>
                We are proud to serve alongside these selected donors, sponsors,
                and partners:
              </p>
            }
          />
        </section> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
