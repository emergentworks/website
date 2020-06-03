import React from 'react'
import cx from 'classnames'

import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './style-guide.module.scss'

const StyleGuide = () => (
  <Layout className={styles.page}>
    <SEO title="Style Guide" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>Style Guide</div>
    </section>
  </Layout>
)

export default StyleGuide
