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
import Link from "next/link";
import CtaLink from "@/components/CtaLink";

// Replaces Gatsby's <SEO> component
export const metadata: Metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <Layout>
      <Hero image={heroImage} title="About Us" objectPosition="left 23%" />
      <div className={cx(styles.root, "page-content")}>
        <section>
          <div className="twoUp">
            <div className={cx(styles.about, "twoUpCard")}>
              <h2>Our Story</h2>
              <p>
                Founded in 2020 under <b>Alex Qin’s</b> leadership,{" "}
                <b>Emergent Works</b> was created to answer a simple but radical
                question: What if technology could be a path to freedom?
              </p>
              <p>
                Originally known as Code Cooperative, we began as a mentorship
                circle for formerly incarcerated people learning to code. The
                organization’s next chapter was shaped by <b>Army Armstead</b> —
                a graduate of our first cohort who rose from mentee to mentor to
                Co-Founder and Executive Director. His journey embodies our
                mission: turning lived experience into leadership.
              </p>
              <p>
                When COVID-19 disrupted traditional learning, Army launched EW’s
                first virtual mentorship program connecting software engineers
                with returning citizens. That initiative became the foundation
                for a movement — one that uses technology, creativity, and
                community to open doors for those most excluded from
                opportunity.
              </p>
            </div>
            <div className="twoUpCard">
              <Image
                src={armyArmsteadImage}
                alt="Army, Executive Director of Emergent Works"
                style={{ width: "100%", height: "auto" }} // Make image responsive
              />
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                We build{" "}
                <b>
                  freedom through digital fluency, education, employment, and
                  economic mobility.
                </b>
              </p>
              <p>
                Emergent Works equips Black and Brown youth and adults impacted
                by incarceration with the tools, networks, and confidence to
                thrive in today’s digital world.
              </p>
              <p>
                Our programs merge technical learning with creative expression
                and healing:
              </p>
              <ul>
                <li>
                  <b>T.RAP (Technology, Rhythm, and Passion) - </b>a
                  creative-tech fellowship blending music, storytelling, and
                  design to cultivate confidence and voice.
                </li>
                <li>
                  <b>T.E.C.K. (Technology Education and Career Knowledge) – </b>
                  career-focused training that builds digital fluency and
                  connects participants to high-wage employment opportunities.
                </li>
                <li>
                  <b>Mentorship & Community –</b>
                  one-on-one support from tech professionals and alumni who
                  model what’s possible.
                </li>
              </ul>
            </div>
            <div>
              <h2>Our Impact</h2>
              <p>
                Each year, Emergent Works serves 50+ participants through
                creative and technical education that leads to measurable
                change:
              </p>
              <ul>
                <li>
                  <b>90%</b> earn digital certifications and career-ready
                  portfolios
                </li>
                <li>
                  <b>75%</b> secure jobs, contracts, or internships within six
                  months
                </li>
                <li>
                  <b>85%</b> report higher confidence, stability, and belonging
                </li>
                <li>
                  <b>20%</b> return as mentors or facilitators — sustaining a
                  cycle of growth and community leadership
                </li>
              </ul>
              <p>
                “We don’t just teach technology — we teach freedom.”<br></br>—
                Army Armstead, Co-Founder & Executive Director
              </p>
            </div>
            <div>
              <h2>Join Us</h2>
              <p>
                Emergent Works is proof that tech can heal — not harm. Whether
                you’re a learner, mentor, or partner, you can help build a world
                where justice, creativity, and opportunity move together.
              </p>
              <Link href="/programs">
                <CtaLink>Join the Movement</CtaLink>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
