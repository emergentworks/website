import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './donate.module.scss'

const DonatePage = () => (
  <Layout className={styles.page}>
    <SEO title="Donate" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>Donate</div>
    </section>
  </Layout>
)

export default DonatePage
