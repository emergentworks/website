import React from "react";
import type { Metadata } from "next";
import cx from "classnames";
import Script from "next/script";

import Layout from "components/Layout";
import Hero from "components/Hero";

import styles from "./page.module.scss";
import heroImage from "../../../public/images/hero/donate.jpg";

export const metadata: Metadata = {
  title: "Donate",
};

const DonatePage = () => {
  return (
    <Layout>
      <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=Dmyv83PBiHwhPXgd&p=other" />
      <Hero image={heroImage} title="Your Support" objectPosition="left 18%" />
      <div className={cx(styles.root, "page-content")}>
        <section>
          <p className={cx(styles.prominent, "tc")}>
            It only takes <span>$500</span> to support a mentee to gain
            high-value technical skills in our technical mentorship program
          </p>
          <div className="twoUp">
            <div className="twoUpCard">
              <p>
                Learning is at the pillar of Emergent Works and we always want
                to acknowledge the dedication each mentee takes to grow and
                elevate their future. With your support, our mentees obtain
                stipends while learning over the course of the program.
              </p>
              <ul>
                <li>
                  <span className="fwb">$15</span> covers one mentee's monthly
                  wifi access
                </li>
                <li>
                  <span className="fwb">$50</span> covers one mentee weekly
                  learning stipend for our in-person T.RAP program
                </li>
                <li>
                  <span className="fwb">$150</span> covers meals and learning
                  for 10 in-person T.RAP mentees
                </li>
                <li>
                  <span className="fwb">$500</span> covers one mentee learning
                  stipend for our TECK digital literacy cohort
                </li>
              </ul>
            </div>
            <div className="twoUpCard">
              <div className={cx(styles.donationWidgetWrapper)}>
                {/* @ts-ignore */}
                <givebutter-widget id="jNOdoL" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DonatePage;
