// src/app/about/page.tsx

import React from "react";
import type { Metadata } from "next";
import cx from "classnames";
import Image from "next/image";

import Layout from "components/Layout";
import Hero from "components/Hero";

import styles from "./page.module.scss";

import heroImage from "../../../public/images/hero/about.png";
import armyArmsteadImage from "../../../public/images/team-core/army_armstead.jpg";

// Replaces Gatsby's <SEO> component
export const metadata: Metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <Layout>
      <Hero
        image={heroImage}
        title="About Our Organization"
        objectPosition="left 23%"
      />
      <div className={cx(styles.root, "page-content")}>
        <section>
          <div className="twoUp">
            <div className={cx(styles.about, "twoUpCard")}>
              <div className={cx(styles.title)}>
                <h2>
                  \"I am living proof that
                  <br />
                  tech is a vehicle for freedom.\"
                </h2>
                <span className={cx(styles.prominent)}>
                  Khalil 'Army' Armstead
                </span>
                <span className={cx(styles.subheading)}>
                  Executive Director
                </span>
              </div>
              <p>
                Founded in 2020 under Alex Qin's leadership, Emergent Works
                envisioned creating a community where formerly incarcerated
                people have a safe space to learn tech literacy and coding
                skills that enable them to seek sustainable employment. Formerly
                known as Code Cooperative, the organization's evolution was
                shaped by Army's inspirational journey, starting as a mentee in
                the mentorship program. Emergent Works took a significant step
                forward by hiring its first employee and operations manager,
                Army Armstead. With a background in teaching, music, and
                ministry, Army brings a unique perspective and deep
                understanding of the challenges faced by system-impacted
                individuals. In his role, Army was responsible for overseeing
                and designing innovative technical education programs tailored
                specifically for communities affected by mass incarceration.
              </p>
              <p>
                Although COVID-19 disrupted many of EW’s plans, Army launched
                the first EW 1:1 virtual mentorship program in year one,
                virtually connecting formerly incarcerated individuals with
                software engineers to build digital literacy and coding skills
                to decrease recidivism, the digital divide, and generational
                poverty. Under Army's leadership, the organization achieved
                notable successes, including creating an open-source app called
                Not911, an alternative to policing in a traditional sense while
                connecting people to counseling, mediation, and intervention
                services.
              </p>
              <p>
                Shortly after his tenure as Operations Manager, Army Armstead
                became our Executive Director. Within three months, he
                spearheaded efforts that led to Emergent Works securing a
                $1,000,000 grant from Jack Dorsey's StartSmall fund. This grant
                was instrumental in providing COVID-proof skills training to our
                communities, underscoring our commitment to equitable access and
                empowerment. In parallel, Army collaborated closely with his
                team to forge impactful partnerships with the Community Justice
                Exchange and the Chan Zuckerberg Initiative. Together, we
                assumed ownership of the development and maintenance of the Bail
                Fund App, a groundbreaking tool that facilitates efficient and
                equitable access to bail funds for individuals incarcerated
                during pretrial and immigration detention. This initiative
                addresses a critical need within our justice system and provides
                apprenticeship opportunities for returning citizens to gain
                real-world experience.
              </p>
            </div>
            <div className="twoUpCard">
              <Image
                src={armyArmsteadImage}
                alt="Army, Executive Director of Emergent Works"
                style={{ width: "100%", height: "auto" }} // Make image responsive
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
