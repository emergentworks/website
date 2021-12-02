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
        <h1 className={cx('title', 'content-max-width', 'leftColumn')}>
          Learn or teach with with us! Whether you’re just starting out or are
          an industry professional, there is a place for you here.
        </h1>
        <div className="rightColumn">
          <div className="videoWrapper">
            <iframe
              title="Meet The Mentors"
              className="video"
              src="https://player.vimeo.com/video/316857444?autoplay=1&title=0&byline=0&portrait=0&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="twoColumnLayout">
        <section
          className={cx(styles.section, styles.mentorshipSection, 'leftHalf')}
        >
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            1:1 Virtual Technical Mentorship Program
          </h2>
          <p className="content-max-width">
            The Emergent Works 1:1 Virtual Technical Mentorship Program provides
            returning citizens with exposure to technology and digital literacy
            training. During the program, mentees are paired with mentors who
            are currently working as software engineers in the tech sector.
            Mentees first work to develop the digital literacy skills necessary
            to learn software development fundamentals. Mentees then work to
            conceptualize, design, and implement a software development project
            under the guidance of, and in collaboration with, their mentors.
            During the culminating showcase event of the program, pairs present
            their completed projects to the EW community. The EW mentorship
            program serves as a gateway to careers in software engineering by
            providing our community members with access and exposure to a
            supportive community of learners and professionals, educational
            resources, and a professional network of industry-leading
            technologists.
          </p>
          <div>
            <Button
              className="mt--lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe5Mx7zA-Qm3v5DCZZm0kedKkOM4Cb_zNHyGvssMR99azW8qg/viewform"
            >
              Apply to become a mentee
            </Button>
          </div>
          <div>
            <Button
              className="mt--lg"
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc9GW3E8zeOW-fXvdjgNlrnPsXo-19lZhc26_ShW91oY9FNIg/viewform"
            >
              Apply to become a mentor
            </Button>
          </div>
        </section>

        <section
          className={cx(styles.section, styles.mentorshipSection, 'rightHalf')}
        >
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            Technology Rhythm And Passion Program (T.RAP)
          </h2>
          <p className="content-max-width">
            Emergent Work’s Technology Rhythm And Passion is a 16-week program
            that introduces artists from communities impacted by incarceration
            to technology through therapeutic writing practices, music/video
            production, and audio engineering. The program provides participants
            with a fundamental working-knowledge of DAW’s, music production, and
            song writing. TRAP teaches participants the requisite web
            development skills to build a web page that showcases the skills
            they gain recording with professional audio engineers and learning
            the practices of therapeutic songwriting. The program culminates
            with participants conceptualizing, designing, and developing a
            website to showcase the music they create during the program which
            is informed by these practices.
          </p>
          <div>
            <Button
              className="mt--lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLyOvsMCU1wnldsvWNjIgWaDYOysT9Gc-ITsRzCyU4K1g8dQ/viewform"
            >
              Apply to become a T.RAP mentee
            </Button>
          </div>
        </section>
      </div>
      <hr />

      <div className="twoColumnLayout">
        <section
          className={cx(styles.section, styles.mentorshipSection, 'leftColumn')}
        >
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            Engineering Leadership Program
          </h2>
          <p className="content-max-width">
            The Emergent Works Engineering Leadership Program is a nine-month
            leadership and technical development program for associate engineers
            on our agency team with a history of incarceration. During this
            program, participants are mentored by our team of senior software
            engineers and undergo a rigorous leadership-development program as
            they work full-time on agency software development projects.
            Participants learn skills essential for senior leadership in the
            modern tech workforce including project and personnel management. As
            a result, they complete the program with the background necessary to
            rapidly advance to mid and senior levels in their career in the
            months and years after completion
          </p>
        </section>

        <div className="rightColumn">
          <div className="videoWrapper">
            <iframe
              title="Emergent Works 2021 Summer 1:1 Showcase Recap"
              className="youtubeVideo"
              src="https://www.youtube.com/embed/PxJQYUBQObI" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProgramsPage;
