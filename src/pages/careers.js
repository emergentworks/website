import React from 'react'
import cx from 'classnames'
import Layout from 'components/Layout'
import SEO from 'components/seo'

import Button from 'components/Button'
import styles from './programs.module.scss'

const ProgramsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Careers" />
    <div className={cx(styles.root, 'content')}>
      <section className={cx(styles.section, styles.mentorshipSection)}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Join our team.
        </h1>
        <div>
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            Make an Impact, Build a Community
          </h2>
          <p className="content-max-width">
            Our mission...
          </p>
        </div>

        <div>
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            Build a Community
          </h2>
          <p className="content-max-width">
            ...
          </p>
        </div>

        <div>
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            Non-profit culture, startup-tier benefits
          </h2>
          <p className="content-max-width">
            ...
          </p>
        </div>

        <div>
          <Button
            className="mt--lg"
            href="https://boards.greenhouse.io/emergentworks"
          >
            View open Positions
          </Button>
        </div>

      </section>

    </div>
  </Layout>
)

export default ProgramsPage
