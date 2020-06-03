import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import "../components/fullstory.js"

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout className={styles.page}>
    <SEO title="Home" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>Home</div>
    </section>
  </Layout>
)

export default IndexPage
