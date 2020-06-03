import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Triptych, TriptychItem } from '../components/Triptych'
import VideoImg from '../_assets/images/video-still.png'
import Video from '../_assets/videos/Code_coop_short_dark.mp4'
import Logos from '../_assets/images/Logos.png'
import Impact from '../_assets/images/impact.jpg'
import Webpage from '../_assets/images/webpage.jpg'
import Jumpstart from '../_assets/images/jumpstart.jpg'

import styles from './agency.module.scss'

const AgencyPage = () => {
  const data;

  return (
    <Layout className={styles.page}>
      <SEO title="Agency" />
      <section className={cx(styles.root, 'content')}>
        <div className={styles.container}>Agency</div>
      </section>
    </Layout>
  )
}

export default AgencyPage
