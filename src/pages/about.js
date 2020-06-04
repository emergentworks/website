import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './about.module.scss'

const AboutPage = () => (
  // const data;

  <Layout className={styles.page}>
    <SEO title="About" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>About</div>
    </section>
  </Layout>
)

export default AboutPage
