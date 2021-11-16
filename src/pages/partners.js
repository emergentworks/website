import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './partners.module.scss'

const PartnersPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuer {
      sponsors: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          name
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  // const teamData = data.teamData.edges
  // const teamPics = data.teamPics.nodes
  const sponsors = data.sponsors.nodes

  // const getImgSrc = name =>
  //   teamPics.filter(image => {
  //     if (!image.name.includes(name)) {
  //       return null
  //     }

  //     return image
  //   })[0].childImageSharp.fluid

  return (
    <Layout className={styles.page}>
      <SEO title="Partners" />
      <section className={cx(styles.gridContainer12, 'content')}>
        <h1 className={cx(styles, 'content-max-width')}>
          Our Partners
        </h1>
        <div>
          <p>
            We believe that realizing our vision of creating life-changing impact for our communities through developing exceptional digital experiences and educational programming means partnering with inspiring organizations to catalyze our shared work. These are some of the incredible organizations with which we partner.
          </p>
        </div>
      </section>

      <br />

      <section className={cx(styles.gridContainer12, 'content')}>
        <div className={styles.partners}>
          {/* <h1 className={cx(styles.subtitle, 'content-max-width')}>
            These are some of the incredible organizations we partner with.
          </h1> */}
          <div className={styles.logoGroup}>
            {sponsors.map(logo => (
              <div key={logo.id} className={styles.logoItem}>
                <Img
                  className={cx(styles.logo)}
                  fluid={logo.childImageSharp.fluid}
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default PartnersPage
