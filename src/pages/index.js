import React from 'react'
import cx from 'classnames'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Button from 'components/Button'
import WaterColor from 'components/WaterColor'
import ImageGrid from 'components/ImageGrid'
import WaterColorYellow from '_assets/images/waterColor-yellow.png'
import Metrocard from '_assets/images/sketch-metrocard.png'
import "../components/fullstory.js"

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout className={styles.page}>
    <SEO title="Home" />
    <section className={'content'}>
      <div className={styles.gridContainer12}>
        <h2 className={cx(styles.gridColLeft, 'mt--xl')}>
          Black and Latinx people make up 32% of the US population and 50% of the prison population,
          but <span className={'bold'}>only 15% of the tech workforce.</span>
        </h2>
      </div>
      <div className={styles.gridContainer12}>
        <h2 className={cx(styles.gridColRight, 'mt--lg')}>
          We strive to correct this imbalance.
        </h2>
      </div>

      {/* TODO: update video to reflect EW rather than CC */}
      <div className={'mt--xl'} style={{padding: '56.25% 0 0 0' , position: 'relative' }}>
        <iframe src="https://player.vimeo.com/video/335249244?title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
        </iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <p className={styles.videoCaption}>Emergent Works interrupts the prison cycle  by creating high-paying jobs in technology  for formerly incarcerated people.</p>

      <div className={styles.gridContainer12}>
        <h2 className={cx(styles.gridCol11, 'mt--xxl')}>
          We want to democratize access to tech education and teach our most vulnerable populations highly valuable skills lorem.
        </h2>
      </div>
    </section>

    <section className={'mt--xxl'}>
      <ImageGrid />
    </section>

    <h3 className={styles.sponsorNames}>
      KICKSTARTER · BITLY · YIELDMO · GIPHY ·
      DROPBOX · BIG CA BOX · NEARFORM · AXIOS ·
      GROUP NINE MEDIA · FLAWLESS RIPPLEMATCH ·
      SPRINKLR · CONDÉ NAST · TECH LADIES
    </h3>

    <section className={cx(styles.gridContainer12, 'content')}>
      <div className={styles.gridColLeft}>
        <h2 className={'mt--xxl'}>
          We are a nonprofit technology company that trains and employs people coming home  from prison.
        </h2>
        <p className={'mt--lg'}>
          Through our projects, our formerly incarcerated apprentices get valuable paid work experience to kickstart their careers in tech.
        </p>
        <h2 className={'mt--xxl'}>
          The Emergent Works community is open and endless.
        </h2>
        <p className={'mt--lg'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className={'mt--xxl'}>
          Help us raise $40,000.
        </h2>
        <p className={'mt--lg'}>
          Monetary donations help us cover all our program costs, such as instructors, space, food, learning supplies, hardware, software, and MetroCards. In addition, all of our participants receive a laptop for the duration of the program. Support our fellows’ learning and donate gently used laptops to the Code Cooperative.
        </p>
        <Button className={'mt--lg'}>Donate Now</Button>
      </div>
      <div className={styles.gridColRight}>
        <WaterColor alt="Hand-drawn metro card image" color={WaterColorYellow} img={Metrocard} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
