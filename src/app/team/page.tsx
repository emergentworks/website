// src/app/team/page.tsx

import React from "react";
import type { Metadata } from "next";
import cx from "classnames";
import Image from "next/image";

import Layout from "components/Layout";
import Hero from "components/Hero";

import styles from "./page.module.scss";

import teamData from "../../data/team.json";
import heroImage from "../../../public/images/hero/team.jpg";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

export const metadata: Metadata = {
  title: "Team",
};

const TeamPage = () => {
  return (
    <Layout>
      <Hero
        className={cx(styles.hero)}
        image={heroImage}
        title="Our Team"
        objectPosition="center 30%"
      />
      <div className={cx(styles.root, "page-content")}>
        <p>
          Army’s vision was to build a skilled team representing our communities
          and embodying our mission work. Four years later, we are proud to say
          that we are led by BIPOC individuals who are system-impacted and have
          the lived experiences many of our program graduates have. We
          prioritize hiring skilled program alumni as our very own Executive
          Director had the same journey and is a testament to our program’s
          effectiveness. As such, our team comprises lived experience and
          diverse personal and professional backgrounds, and we create the space
          for them to feel empowered to use their wealth of knowledge, skills,
          and expertise to lead programs and operations. Please take a look at
          our team’s success below:
        </p>
        <ul>
          <li>57% of the team are EW program alumni</li>
          <li>71% of the team are system and justice-impacted</li>
          <li>86% of the team are BIPOC</li>
          <li>57% of the team are female-identifying</li>
          <li>75% of the leadership team are BIPOC</li>
          <li>75% of the leadership team are female-identifying</li>
          <li>
            100% hired program alumni as instructors for Bigger Than The Block
          </li>
        </ul>
        <section className={styles.teamContainer}>
          <div className={styles.team}>
            {(teamData as TeamMember[]).map((person) => (
              <div key={person.name} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={`/images/team-core/${person.img}`}
                    alt={person.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{person.name}</span>
                  <div className={styles.role}>{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
