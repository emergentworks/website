import React from 'react'
import cx from 'classnames'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Accordion from 'components/Accordion'

import styles from './programs.module.scss'

const AgencyPage = () => (
  <Layout className={styles.page}>
    <SEO title="Programs" />
    <div className={cx(styles.root, 'content')}>
      <section className={cx(styles.section, styles.mentorshipSection)}>
        <h1 className={cx(styles.subTitle, 'content-max-width')}>
          1-1 Mentorship Program
        </h1>
        <p className="content-max-width">
          The Code Cooperative 1-on-1 mentorship is a 3-month program where
          professional software engineers mentor formerly incarcerated and
          justice-involved individuals.
        </p>
        <p className="content-max-width">
          Participants will develop and strengthen skills in computer
          programming and web development while developing valuable
          relationships with industry professionals.
        </p>
        <div className={styles.mentorshipVideo}>
          <iframe
            title="Meet The Mentors"
            src="https://player.vimeo.com/video/316857444"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div style={styles.accordionGroup}>
          <Accordion
            label="How can I get mentorship?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            label="How can I become a mentor for the 1-1 Mentorship Program?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </section>

      <section className={cx(styles.section, styles.fellowshipSection)}>
        <h2 className={cx(styles.subTitle, 'content-max-width')}>
          Emergent Works Fellowship
        </h2>
        <p className="content-max-width">
          Applications are currently closed for the Code Cooperative Fellowship.
          Interested participants should consider applying to the 1-on-1
          mentorship program.
        </p>
        <div style={styles.accordionGroup}>
          <Accordion
            label="Lorem ipsum dolor sit amet?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            label="Lorem ipsum dolor sit amet?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </section>
    </div>
  </Layout>
)

export default AgencyPage
