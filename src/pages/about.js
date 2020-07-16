import React from 'react'
import { useStaticQuery, graphql, prefetchPathname } from 'gatsby'
import cx from 'classnames'

import Img from 'gatsby-image'
import Grid from 'components/Grid'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import styles from './about.module.scss'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      teamPics: allFile(filter: { relativeDirectory: { eq: "team-core" } }) {
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
      teamData: allTeamJson {
        edges {
          node {
            id
            name
            img
            twitter
            role
          }
        }
      }
    }
  `)

  const teamData = data.teamData.edges
  const teamPics = data.teamPics.nodes

  const getImgSrc = name =>
    teamPics.filter(image => {
      if (!image.name.includes(name)) {
        return null
      }

      return image
    })[0].childImageSharp.fluid

  return (
    <Layout className={styles.page}>
      <SEO title="About" />
      <section className={cx(styles.root, 'content')}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Emergent Works is a community of people who learn, use, and build
          technology to create life-changing possibilities for individuals and
          communities impacted by incarceration.
        </h1>
        <div className={styles.team}>
          {teamData.map(person => (
            <div key={person.node.id} className={styles.person}>
              <div className={styles.image}>
                <Img
                  className={cx(styles.img)}
                  fluid={getImgSrc(person.node.name)}
                  alt={`Image of ${person.node.name}`}
                />
              </div>
              <h4 className={styles.name}>{person.node.name}</h4>
              <div className={styles.role}>{person.node.role}</div>
            </div>
          ))}
        </div>
        <div className={styles.partners}>
          <h2 className={styles.partnersTitle}>Our partners</h2>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
