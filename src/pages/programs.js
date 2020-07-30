import React from 'react'
import cx from 'classnames'
import Layout from 'components/Layout'
import SEO from 'components/seo'
import Accordion from 'components/Accordion'
import Button from 'components/Button'
import styles from './programs.module.scss'

const ProgramsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Programs" />
    <div className={cx(styles.root, 'content')}>
      <section className={cx(styles.section, styles.mentorshipSection)}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Learn or teach with with us! Whether you’re just starting out or are an industry professional,
          there is a place for you here.
        </h1>
        <div className={styles.videoWrapper}>
        <iframe
          title="Meet The Mentors"
          className={styles.video}
          src="https://player.vimeo.com/video/316857444?autoplay=1&title=0&byline=0&portrait=0&muted=1&loop=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        </div>
        <h2 className={cx(styles.subTitle, 'content-max-width')}>
          1-on-1 Mentorship Program
        </h2>
        <p className="content-max-width">
          We pair formerly incarcerated or justice-involved mentees with
          volunteer mentors. Participants will develop and strengthen skills in computer
          programming and web development while developing valuable
          relationships with industry professionals.
        </p>
        <div><Button className={'mt--lg'} href="https://docs.google.com/forms/d/e/1FAIpQLSe5Mx7zA-Qm3v5DCZZm0kedKkOM4Cb_zNHyGvssMR99azW8qg/viewform">Apply to become a mentee</Button></div>
        <div><Button className={'mt--lg'} href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc9GW3E8zeOW-fXvdjgNlrnPsXo-19lZhc26_ShW91oY9FNIg/viewform">Join the waiting list to become a mentor</Button></div>
        {/* <div style={styles.accordionGroup}>
          <Accordion
            label="How can I get mentorship?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            label="How can I become a mentor for the 1-1 Mentorship Program?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div> */}
      </section>

      <section className={cx(styles.section, styles.fellowshipSection)}>
        <div className={styles.videoWrapper}>
          <iframe
            title="Meet The Mentors"
            className={styles.video}
            src="https://player.vimeo.com/video/417760949?byline=0&portrait=0&muted=1&loop=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className={cx(styles.subTitle, 'content-max-width')}>
          Emergent Works Fellowship
        </h2>
        <p className="content-max-width">
          Our last fellowship ran from October 2019 to February 2020. Applications are currently closed for the Emergent Works Fellowship.
          Interested participants should consider applying to the 1-on-1
          mentorship program.
        </p>
        {/* <div style={styles.accordionGroup}>
          <Accordion
            label="Lorem ipsum dolor sit amet?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <a href='#'>tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            label="Lorem ipsum dolor sit amet?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div> */}
      </section>
    </div>
  </Layout>
)

export default ProgramsPage
