import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';

import Button from 'components/Button';
import styles from './programs.module.scss';

const ProgramsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Programs" />
    <div className={cx(styles.root, 'content')}>
      <div className="twoColumnLayout">
        <h1 className="title">
          Learn or teach with with us! Whether you're just starting out or are
          an industry professional, there is a place for you here.
        </h1>
        <div>
          <div className="videoWrapper">
            <iframe
              title="Emergent Works Programs"
              src="https://player.vimeo.com/video/672029511?title=0&byline=0&portrait=0&color=00e461"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </div>
    </div>

    <section className={cx(styles.programsWrapper)}>
      <div className={cx(styles.programsCard)}>
        <h2>1:1 Virtual Technical Mentorship Program</h2>
        <p>
          Our 1:1 Virtual Technical Mentorship Program provides returning
          citizens with exposure to technology and digital literacy training.
          During the program, mentees are paired with mentors who work as
          software engineers in the tech sector. Mentees first work to develop
          the digital literacy skills necessary to learn software development
          fundamentals. Mentees then work to conceptualize, design, and
          implement a software development project under the guidance of, and in
          collaboration with, their mentors. During the culminating showcase
          event of the program, pairs present their completed projects to the EW
          community. The EW mentorship program serves as a gateway to careers in
          software engineering by providing our community members with access
          and exposure to a supportive community of learners, professionals,
          educational resources, and a professional network of industry-leading
          technologists.
        </p>
        <Button href="https://airtable.com/shrMFJ9cUG7OIuP78">
          Apply to become a mentee
        </Button>
        <Button href="https://airtable.com/shrToEfXoVDu63iES">
          Apply to become a mentor
        </Button>
      </div>

      <div className={cx(styles.programsCard)}>
        <h2>Technology Rhythm And Passion Program (T.RAP)</h2>
        <p>
          A 16-week program that introduces artists from communities impacted by
          incarceration to technology through therapeutic writing practices,
          music/video production, and audio engineering. The program provides
          participants with a fundamental working-knowledge of DAW's, music
          production, and song writing. TRAP teaches participants the requisite
          web development skills to build a web page that showcases the skills
          they gain recording with professional audio engineers and learning the
          practices of therapeutic songwriting. The program culminates with
          participants conceptualizing, designing, and developing a website to
          showcase the music they create during the program which is informed by
          these practices.
        </p>
        <Button
          className={cx(styles.applyLink)}
          href="https://airtable.com/shrp92mjyNjaPDje1"
        >
          Apply to become a T.RAP mentee
        </Button>
      </div>
    </section>

    <section className={cx(styles.contentSectionWrapper)}>
      <div className={cx(styles.contentSectionCopy)}>
        <h2>Engineering Leadership Program</h2>
        <p>
          A nine-month leadership and technical development program for
          associate engineers on our agency team with a history of
          incarceration. During this program, participants are mentored by our
          team of senior software engineers and undergo a rigorous
          leadership-development program as they work full-time on our software
          products team. Participants learn skills essential for senior
          leadership in the modern tech workforce including project and
          personnel management. As a result, they complete the program with the
          background necessary to rapidly advance to mid and senior levels in
          their career in the months and years after completion.
        </p>
      </div>

      <div className={cx(styles.contentSectionContent)}>
        <div className="videoWrapper">
          <iframe
            title="Emergent Works 2021 Summer 1:1 Showcase Recap"
            className="youtubeVideo"
            src="https://www.youtube.com/embed/PxJQYUBQObI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default ProgramsPage;
