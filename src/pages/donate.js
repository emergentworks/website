import React from 'react'
import cx from 'classnames'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid, { GridItem } from 'components/Grid'
import SEO from '../components/seo'
import Button from '../components/Button'
import Layout from '../components/Layout'

import styles from './donate.module.scss'

const DonatePage = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const Laptop = data.Laptop.childImageSharp.fluid

  return (
    <Layout className={styles.page}>
      <SEO title="Donate" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Our program runs on donations so that we can provide the best learning experience for our students.
        </h1>
        <Grid gap={4}>
          <Grid col={2} gap={4}>
            <GridItem>
              <h2 className="mt--none">Help us raise $100,000</h2>
              <p>
                Emergent Works programs run entirely on donations.
                We are a registered 501(c)(3) nonprofit that aims to interrupt the prison cycle by creating pathways into high-paying tech careers for formerly incarcerated people.
                Anything you can give helps tremendously!
              </p>
            </GridItem>

            <GridItem justify="right">
              <script
                src="https://donorbox.org/widget.js"
                paypalExpress="false"
              ></script>
              <iframe
                title="Donate to the Code Cooperative!"
                allowpaymentrequest=""
                className={styles.donarbox}
                frameBorder="0"
                height="900px"
                name="donorbox"
                scrolling="no"
                seamless="seamless"
                src="https://donorbox.org/embed/website-donation-15"
                width="100%"
              ></iframe>
            </GridItem>
          </Grid>
          <Grid col={2} gap={4}>
            <GridItem align="middle">
              <h2 className="mt--none">Donate laptops</h2>
              <p>
              All of our participants receive a laptop for the duration of the
                program. Support our students’ learning by donating gently used
                laptops!
              </p>

              <Button
                className="mt--lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSekRlaBYt0ILYZP90bJUiXfTf9fCl0brJwamNAgUoH1hIsZdg/viewform"
              >
                Donate laptops
              </Button>
            </GridItem>

            <GridItem justify="center">
              <Img fluid={Laptop} alt="hello" className={styles.laptop} />
            </GridItem>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    Laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DonatePage
