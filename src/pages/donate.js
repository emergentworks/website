import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './about.scss'

const DonatePage = () => (
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     teamPics: allFile(filter: { relativeDirectory: { eq: "team" } }) {
  //       nodes {
  //         name
  //         id
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //     teamData: allTeamJson {
  //       edges {
  //         node {
  //           id
  //           name
  //           img
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  <Layout className="donate">
    <SEO title="Donate" />
    <section>donate</section>
  </Layout>
)

export default DonatePage
