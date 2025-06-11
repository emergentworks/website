// src/app/programs/page.tsx

import React from "react";
import type { Metadata } from "next";
import cx from "classnames";
import Image from "next/image";

import Layout from "components/Layout";
import Hero from "components/Hero";
import CtaLink from "components/CtaLink";

import styles from "./page.module.scss";

import programs from "../../data/programs.json";
import heroImage from "../../../public/images/hero/programs.jpg";
import programmingImage from "../../../public/images/programs/programming.jpg";

type Track = {
  title: string;
  description: string;
  date: string;
};

type ProgramLink = {
  href: string;
  title: string;
};

type Program = {
  title: string;
  subtitle: string;
  isAcceptingApplications: boolean;
  qualifications: string[];
  commitments: string[];
  description: string;
  links: ProgramLink[] | null;
  tracks: Track[] | null;
};

export const metadata: Metadata = {
  title: "Programs",
};

const Tracks = ({ tracks }: { tracks: Track[] | null }) => {
  if (!tracks || tracks.length === 0) {
    return null;
  }

  return (
    <ul aria-label="Cohorts" className={cx(styles.tracks)}>
      {tracks.map(({ title, description, date }) => (
        <li key={title}>
          <span className={cx(styles.trackDescription, "mb")}>
            {title} ({date}):{" "}
          </span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};

const ProgramCard = ({ program }: { program: Program }) => {
  const {
    title,
    subtitle,
    isAcceptingApplications,
    qualifications,
    commitments,
    description,
    links,
    tracks,
  } = program;

  const shouldShowProgramLinks = isAcceptingApplications && links;

  return (
    <div className={cx(styles.programCard, "twoUp mb")}>
      <div className="twoUpCard">
        <h3 className={cx(styles.programTitle)}>
          {title}
          <span className={cx(styles.programSubtitle)}>{subtitle}</span>
        </h3>
      </div>
      <div className={cx(styles.programInfo, "twoUpCard")}>
        {qualifications && (
          <ul aria-label="Qualifications">
            {qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {commitments && (
          <ul aria-label="Commitment">
            {commitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className={cx(styles.description)}>
          {description}
          <Tracks tracks={tracks} />
          <div className={cx(styles.programLinks)}>
            {shouldShowProgramLinks ? (
              links.map((link) => (
                <CtaLink key={link.href} href={link.href}>
                  {link.title}
                </CtaLink>
              ))
            ) : (
              <span>
                <em>More information coming soon!</em>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage = () => {
  return (
    <Layout>
      <Hero image={heroImage} title="Our Programs" objectPosition="left 66%" />
      <div className={cx(styles.root, "page-content")}>
        <section>
          <div className="twoUp" style={{ marginTop: "60px" }}>
            <div className="twoUpCard">
              <Image
                src={programmingImage}
                alt="Mentorship Program participants"
                layout="responsive"
                width={700}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="twoUpCard">
              <h2>Technical Education Programming</h2>
              <p>
                Emergent Works trains individuals who were formerly-incarcerated
                and those impacted by the criminal legal system through
                technical programming that provides free access to education,
                resources, a safe community, and employment opportunities.
                Through our programs, we hope to help end the revolving door of
                mass incarceration by closing the wealth gap and digital divide.
              </p>
              <p className="tc mb--sm">
                <CtaLink to="/passion-projects">
                  See Our Mentee Projects
                </CtaLink>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our various programs </h2>
          {programs.map((program: Program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
