import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/Layout'
import Grid from 'components/Grid'
import Button from 'components/Button'

import styles from './style-guide.module.scss'

const StyleGuide = () => (
  <Layout className="style-guide">
    <SEO title="Style Guide" />
    <div className={cx(styles.root, 'content')}>
      <div className={styles.container}>
        <h1>Style Guide</h1>
        <Grid col={2} gap={3}>
          <section>
            <h3>Color</h3>
            <Grid col={3} gap={2} className={cx(styles.swatchGroup)}>
              <div
                className={cx(
                  styles.swatchItem,
                  styles.blue500,
                  styles.fcWhite500
                )}
              ></div>
              <div className={cx(styles.swatchItem, styles.green500)}></div>
              <div
                className={cx(
                  styles.swatchItem,
                  styles.purple500,
                  styles.fcWhite500
                )}
              ></div>
              <div className={cx(styles.swatchItem, styles.yellow500)}></div>
              <div className={cx(styles.swatchItem, styles.white500)}></div>
              <div
                className={cx(
                  styles.swatchItem,
                  styles.gray500,
                  styles.fcWhite500
                )}
              ></div>
            </Grid>
            <h3>Button</h3>
            <p>
              <Button>Become a sponsor</Button>
            </p>
          </section>
          {/* Typo */}
          <section>
            <h3>Typography</h3>
            <h4 className={styles.label}>Typeface</h4>
            <div className={styles.typefaceDemoGroup}>
              <div className={styles.typefaceDemoItem}>
                <div className={cx(styles.typefaceTitle, styles.typefaceBase)}>
                  Aa
                </div>
                <span className={cx(styles.typefaceName, styles.typefaceBase)}>
                  IBM Plex Sans Regular
                </span>
              </div>

              <div className={styles.typefaceDemoItem}>
                <div className={cx(styles.typefaceTitle, styles.typefaceLight)}>
                  Aa
                </div>
                <span className={cx(styles.typefaceName, styles.typefaceLight)}>
                  IBM Plex Sans Light
                </span>
              </div>

              <div className={styles.typefaceDemoItem}>
                <div
                  className={cx(styles.typefaceTitle, styles.typefaceMedium)}
                >
                  Aa
                </div>
                <span
                  className={cx(styles.typefaceName, styles.typefaceMedium)}
                >
                  IBM Plex Sans Medium
                </span>
              </div>

              <div className={styles.typefaceDemoItem}>
                <div
                  className={cx(styles.typefaceTitle, styles.typefaceSemiBold)}
                >
                  Aa
                </div>
                <span
                  className={cx(styles.typefaceName, styles.typefaceSemiBold)}
                >
                  IBM Plex Sans SemiBold
                </span>
              </div>
            </div>

            <h4 className={styles.label}>Heading</h4>
            <hgroup>
              <h1 className="h1">h1 - title</h1>
              <h2 className="h2">h2 - sub-title</h2>
              <h3 className="h3">h3 - section-title</h3>
              <h4 className="h4">h4 - label</h4>
            </hgroup>

            <h4 className={styles.label}>Text elements</h4>

            <p>
              <Link to="#">This is an example of a Text link</Link>
            </p>

            <p>
              This is a paragraph.....Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ut error excepturi at nobis mollitia sunt.
              Consequatur eos iure blanditiis,tempora, asperiores placeat nisi
              officia, nam beatae a quam recusandae. Voluptatem minima, culpa
              quia praesentium excepturi minus libero veritatis doloribus quae,
              unde vitae, quam et aperiam!
            </p>
          </section>
        </Grid>
      </div>
    </div>
  </Layout>
)

export default StyleGuide
