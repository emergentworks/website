// src/app/passion-projects/page.tsx

import React from "react";
import type { Metadata } from "next";
import cx from "classnames";
import Image from "next/image";

import Layout from "components/Layout";
import Hero from "components/Hero";
import CtaLink from "components/CtaLink";

import styles from "./page.module.scss";

import projects from "../../data/passion-projects.json";
import heroImage from "../../../public/images/hero/programs.jpg";
import projectsImage from "../../../public/images/projects1.jpg";

type Project = {
  program: string;
  student: string;
  cohort: string;
  description: string;
  github: string | null;
  img: string;
};

export const metadata: Metadata = {
  title: "Passion Projects",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { program, student, cohort, description, github, img } = project;
  const imageSrc = `/images/passion-projects/${img}`;

  return (
    <div key={student} className={cx(styles.card, "twoUp")}>
      <div className="twoUpCard">
        <h3 className={cx(styles.programTitle)}>{program}</h3>
        <div className={cx(styles.prominent, styles.student)}>{student}</div>
        <div>{cohort}</div>
        <p>{description}</p>
        {github && (
          <div className={cx(styles.links)}>
            <CtaLink href={github}>View Project</CtaLink>
          </div>
        )}
      </div>
      <div className={cx("twoUpCard", styles.projectImageWrapper)}>
        <Image
          src={imageSrc}
          alt={`Passion project by ${student}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

const PassionProjectsPage = () => {
  return (
    <Layout>
      <Hero
        image={heroImage}
        title="Graduation Projects"
        className={cx(styles.filter)}
        objectPosition="left 65%"
      />
      <div className={cx(styles.root, "page-content")}>
        <section>
          <p className={cx(styles.prominent, "tc")}>
            Our mentees build technical projects of their choice by applying
            their
            <br />
            newly-acquired technical skills gained during our program
          </p>
          <div className="twoUp">
            <div className={cx(styles.filter, "twoUpCard")}>
              <Image
                src={projectsImage}
                alt="Mentorship Program participants"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="twoUpCard">
              <h2>Technical Skills Expressed in a Passion Project</h2>
              <p>
                Our 1:1 Technical Mentorship program equips our mentees with
                valuable technical and soft skills during the cohort. As part of
                their graduation each mentee develops and builds a passion
                project of their choice that incorporates their newly learned
                skills. This gives our mentees real life experience with their
                skills as well as a project for their portfolio they can use for
                further career building.
              </p>
              <p className="tc mb--sm">
                <CtaLink href="https://emergentworks.super.site/spring-2024-portfolios">
                  See Digital Literacy Graduate Portfolios
                </CtaLink>
              </p>
              <p className="tc mb--sm">
                <CtaLink to="/programs">Learn More About Our Programs</CtaLink>
              </p>
              <p>
                We have seen incredible passion projects over the years
                including websites, online games, UI/UX design, apps and much
                more. It is always a privilege to witness all the innovative and
                creative ideas our mentees are able to realize in a short time
                frame. We are excited to see everything there is yet to come
                from them on their continued professional development journey.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our mentee passion projects</h2>
          {(projects.data as Project[]).map((project) => (
            <ProjectCard key={project.student} project={project} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default PassionProjectsPage;
