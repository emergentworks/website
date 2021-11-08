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
          Emergent Works Agency
        </h1>
        <div className={styles.gridContainer12}>
          <p>
            We are the Emergent Works Agency. We build exceptional digital experiences informed by an ingenuity that could only be borne of the incredibly diverse range of experiences embodied by our team. We pride ourselves in building technology that is responsive to the unique challenges that organizations face in providing user experiences that are responsive and inclusive to their diverse range of users. Our team believes that products are most effectively built through close collaboration and communication with clients about their visions so we can make them a reality.
          </p>
          <p>
            Our clients have come to depend on us as an agency that delivers on our promise to build the highest quality software, while providing them with the opportunity to contribute to driving meaningful change in our communities. Our senior engineering team provides mentorship and leadership development to associate software engineers with a history of incarceration through our nine-month Engineering Leadership Program. During the program, participants are mentored by our team of senior software engineers and undergo  rigorous leadership development training as they work full-time on agency software development projects. Participants learn skills essential for senior leadership in the modern tech workforce including project and personnel management. As a result, they complete the program with the background necessary to rapidly advance to mid and senior levels in their career in the years after completion.
          </p>

        </div>
        <p>
          Interested in working with us? Send us an email at <a href="mailto:hello@emergentworks.org">hello@emergentworks.org</a>
        </p>
        {/* {images.map((img, i) => (
          <div className={styles.work} key={i}>
            <ImgCaption
              className={styles.work}
              fluid={img.childImageSharp.fluid}
              alt={img.name}
            />
          </div>
        ))} */}
        {/* <a id="leadForm"></a>
        <LeadForm /> */}
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
