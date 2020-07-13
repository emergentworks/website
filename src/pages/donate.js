import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Grid, { GridItem } from 'components/Grid'
import WaterColor from 'components/WaterColor'
import Button from 'components/Button'
import SketchLaptop from '_assets/images/sketch-laptop.png'
import SEO from '../components/seo'
import Layout from '../components/Layout'

import styles from './donate.module.scss'

const DonatePage = () => (
  <Layout className={styles.page}>
    <SEO title="Donate" />
    <div className={cx(styles.root, 'content')}>
      <Grid col={2}>
        <GridItem>
          <h1>
            Our program runs on donations so that we can provide MetroCards,
            food, hardware, and office supplies for our fellows.
          </h1>
        </GridItem>
        <GridItem />
      </Grid>
      <Grid col={1} gap={5} className={styles.contentGroup}>
        <GridItem className={styles.contentItem}>
          <h2>Help us raise $40,000</h2>
          <p>
            Help us reach our goal to raise $40,000 for our next program.
            Donations help us cover all our program costs: instructors, space,
            food, learning supplies, hardware, software, metrocards, etc.
          </p>
          <Button to="#">Contribute now</Button>
        </GridItem>

        <GridItem className={styles.contentItem}>
          <h2>Donate laptops</h2>
          <p>
            All of our participants receive a laptop for the duration of the
            program. Support our students’ learning by donating gently used
            laptops.
          </p>
          <Button to="#">Donate laptops</Button>
        </GridItem>

        <GridItem className={styles.contentItem}>
          <h2>Are you a company? Sponsor lorem ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button to="#">Lorem ipsum dolor sit</Button>
        </GridItem>
      </Grid>
    </div>
  </Layout>
)

export default DonatePage
