import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import CtaLink from "components/CtaLink";
import Layout from "components/Layout";
import Hero from "components/Hero";
import PartnersModule from "components/PartnersModule";

import styles from "./page.module.scss";

import heroImage from "../../public/images/hero/homepage.png";
import ourFocusImage from "../..//public/images/homepage/our-focus.jpg";
import terrenceImage from "../../public/images/homepage/terrence.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <div className={cx(styles.root)}>
        <Hero image={heroImage} title="Title" objectPosition="left 27%">
          <h1 className={cx(styles.hero, "cornerBordersHero")}>
            Technology is our <span className={cx(styles.green)}>key</span>
            <br />
            Together we decode the{" "}
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
                  Emergent Works pioneers solutions to combat mass incarceration
                  by empowering black and brown individuals with technical
                  education and skills-based training. Led by Executive Director
                  Army Armstead, a former mentee and graduate of the program, we
                  bridge the technology and education gap through innovative
                  programs like TECK (Technical Education and Career Knowledge)
                  and T.RAP (Technology, Rhythm and Passion youth initiative).
                  Our approach, blending mentorship and industry-leading
                  workshops, creates pathways to success for marginalized
                  communities, making us a catalyst for change in the fight
                  against mass incarceration.
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
                <Image
                  src={ourFocusImage}
                  alt="Mentorship Program participants"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="cornerBorders">Why We Do This Work</h2>
            <div
              className={cx(
                "threeUp",
                styles.statisticsCardGroup,
                styles.statisticInitial,
              )}
            >
              <div className={cx("threeUpCard", styles.statisticsCard)}>
                <span>Average U.S recidivism rate</span>
                <span className={cx(styles.statistic)}>44%</span>
              </div>
              <div
                className={cx(
                  "threeUpCard",
                  styles.statisticsCard,
                  styles.statisticInitial,
                )}
              >
                <span>Formerly-incarcerated employment rate</span>
                <span className={cx(styles.statistic)}>40%</span>
              </div>
              <div
                className={cx(
                  "threeUpCard",
                  styles.statisticsCard,
                  styles.statisticInitial,
                )}
              >
                <span>Formerly-incarcerated annual income</span>
                <span className={cx(styles.statistic)}>+$10K</span>
              </div>
              <div
                className={cx(
                  "threeUpCard",
                  styles.statisticsCard,
                  styles.statisticEW,
                )}
              >
                <span>EW Alumni recidivism rate</span>
                <span className={cx(styles.statistic)}>0%</span>
              </div>
              <div
                className={cx(
                  "threeUpCard",
                  styles.statisticsCard,
                  styles.statisticEW,
                )}
              >
                <span>EW Alumni employment rate</span>
                <span className={cx(styles.statistic)}>75%</span>
              </div>
              <div
                className={cx(
                  "threeUpCard",
                  styles.statisticsCard,
                  styles.statisticEW,
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
              className={cx("twoUp", styles.fullbleed, styles.solutionsBlock)}
            >
              <div className="twoUpCard">
                <div className={cx(styles.solutionsCard)}>
                  <h3>T.RAP</h3>
                  <span>
                    Empowering young artists impacted by the criminal legal
                    system through artistry development, digital literacy, and
                    professional growth
                  </span>
                  <Link href="/programs">
                    <CtaLink>Learn More</CtaLink>
                  </Link>
                </div>
              </div>
              <div className="twoUpCard">
                <div className={cx(styles.solutionsCard)}>
                  <h3>TECK</h3>
                  <span>
                    Enhancing digital career skills for formerly-incarcerated
                    individuals with instructor-led workshops and mentorship
                    from industry professionals
                  </span>
                  <Link href="/programs">
                    <CtaLink>Learn More</CtaLink>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="cornerBorders">What Our Mentees Say</h2>
            <div className={cx(styles.menteeBlock, "twoUp")}>
              <div className="twoUpCard">
                <Image
                  src={terrenceImage}
                  alt="Terrence, an EW mentee"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="twoUpCard">
                <p className={cx(styles.prominent, "tr")}>
                  <br />
                  EW gives you constant support at every step
                </p>
                <p className={cx(styles.cornerBorders, styles.quote)}>
                  The EW experience was amazing, it gave me a complete
                  connection of my technical skills, with being able to speak to
                  teachers and mentors in real time. EW gives you constant
                  support at every step of the process, all they ask if that you
                  make the leg work to show you are committed to the process as
                  well as yourself and making sure you are the best you can be
                  to achieve your goals. I use my skills everyday currently.
                  Today I work for a tech company as a junior software engineer
                  thanks to EW, and am able to use my skills everyday at my work
                  place as well as expand on my skills and knowledge. I’ve
                  enjoyed it greatly and relish in the challenge of this new
                  job. I’m forever grateful that when I do need help my mentor
                  and EW family are in my corner.
                </p>
                <p className={cx(styles.attribution, "tr")}>
                  - Terrence, Emergent Works 2023 TECK graduate
                </p>
                <div className="tc mb--sm">
                  <Link href="/passion-projects">
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
                    <Link href="/donate">
                      <CtaLink>Donate</CtaLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <CtaLink>Mentor</CtaLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
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
