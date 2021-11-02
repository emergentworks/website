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
        <p>
          We believe that developing software and educational programming that is responsive to the problems our clients and society face, necessitates that our team be representative of the diverse range of perspectives in the world. Having team members with direct lived experience with the problems we solve for our clients and communities allows us to build products and programs that are both inclusive and sensitive to the lives of the people that interact with and are impacted by them.
        </p>
        <p className="content-max-width">
          See what's available on our jobs page.
        </p>
        {/* <div>
          <h2 className={cx(styles.subTitle, 'content-max-width')}>
            We are the Emergent Works Family.
          </h2>
          <p className="content-max-width">
            Our mission...
          </p>
        </div> */}

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
