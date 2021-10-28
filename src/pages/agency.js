import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import cx from 'classnames'
import LeadForm from 'components/LeadForm'
import Layout from 'components/Layout'
import SEO from 'components/seo'
import ImgCaption from 'components/ImgCaption'

import styles from './agency.module.scss'

const ForClientsPage = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const images = data.images.nodes

  return (
    <Layout className={styles.page}>
      <SEO title="For Clients" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Emergent Works builds software for purposeful organizations while
          creating employment opportunities for formerly incarcerated people.
        </h1>

        {images.map((img, i) => (
          <div className={styles.work} key={i}>
            <ImgCaption
              className={styles.work}
              fluid={img.childImageSharp.fluid}
              alt={img.name}
            />
          </div>
        ))}
        <a id="leadForm"></a>
        <LeadForm />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "agency" } }
      sort: { fields: [name], order: ASC }
    ) {
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
`

ForClientsPage.propTypes = {
  data: PropTypes.object,
}

export default ForClientsPage
