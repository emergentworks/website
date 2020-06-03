import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './volunteer.module.scss'

const VolunteerPage = () => (
  <Layout className={styles.page}>
    <SEO title="Volunteer" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>Volunteer</div>
    </section>
  </Layout>
)

export default VolunteerPage
