import React from 'react';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import programsStyles from './programs.module.scss';

const AboutPage = () => {
  return (
    <Layout className={programsStyles.page}>
      <SEO title="About" />
      <div className={cx(programsStyles.root, 'content')}>
        <div className="twoColumnLayout">
          <div>
            <h1 className="title">
              Living Proof That Tech Is A Vehicle For Freedom
            </h1>
            <h2>Khalil "Army" Armstead</h2>
            <h4>Executive Director</h4>
            <p>
              Growing up as a Black man in New York City, I've always wanted to
              serve. With a background in ministry and music, I'm acutely aware
              that marginalized people need safe spaces to be heard. With my
              first-hand experience and success in utilizing the elements of my
              lived experiences, I've learned the importance of healing,
              redemption, and liberation through technology.
              <p>
                Overcoming my experiences with the justice system through faith
                and resilience shaped me into a steadfast champion of mental
                health awareness and a strong proponent of community-led
                solutions.
              </p>
            </p>
          </div>
          <div>
            <StaticImage
              src="../_assets/images/team-core/army_armstead.jpg"
              alt="Army Armstead, Executive Director"
              layout="constrained"
            />
          </div>
        </div>
        <section>
          <p>
            Introduced to EW in 2019 (formerly Code Cooperative), I successfully
            enrolled and completed the 16-week cohort. My greatest takeaway from
            this experience was discovering a safe community, allowing me to be
            transparent, grow, and use my lived experiences to succeed. After
            twelve weeks into the program and the determination to succeed, I
            became the first employee and operations manager for Code
            Cooperative. I oversaw and designed new programs for communities
            impacted by mass incarceration. Less than a year later, I am proud
            to say that I became Executive Director of Emergent Works and
            launched our 1:1 Technical Mentorship Program. Tech really did
            transform my life, and with Emergent Works it is my mission to pave
            that forward to the next person.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
