import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './about.scss'

const ContactPage = () => (
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

  <Layout className="contact-us">
    <SEO title="Contact Us" />
    <section>contact-us</section>
  </Layout>
)

export default ContactPage
