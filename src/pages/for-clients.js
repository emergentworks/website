import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import cx from 'classnames'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Grid, { GridItem } from 'components/Grid'
import WaterColor from 'components/WaterColor'
import ImgCaption from 'components/ImgCaption'

import styles from './for-clients.module.scss'

const ForClientsPage = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const Img1 = data.Img1.childImageSharp.fluid
  const Img2 = data.Img2.childImageSharp.fluid
  const Img3 = data.Img3.childImageSharp.fluid
  const Img4 = data.Img4.childImageSharp.fluid
  const Img5 = data.Img5.childImageSharp.fluid
  const Img6 = data.Img6.childImageSharp.fluid
  const Img7 = data.Img7.childImageSharp.fluid
  const Img8 = data.Img8.childImageSharp.fluid
  const Img9 = data.Img9.childImageSharp.fluid
  const Img10 = data.Img10.childImageSharp.fluid
  const Img11 = data.Img11.childImageSharp.fluid


  return (
    <Layout className={styles.page}>
      <SEO title="For Clients" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx(styles.title, 'content-max-width')}>
          Emergent Works builds software for purposeful
          organizations while creating employment opportunities for formerly incarcerated people.
        </h1>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img1}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img2}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img3}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img4}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img5}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img6}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img7}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img8}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img9}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img10}
          />
        </div>
        <div className={styles.work}>
          <ImgCaption
            className={styles.work}
            fluid={Img11}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    Img1: file(relativePath: { eq: "agency/agency1.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img2: file(relativePath: { eq: "agency/agency2.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img3: file(relativePath: { eq: "agency/agency3.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img4: file(relativePath: { eq: "agency/agency4.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img5: file(relativePath: { eq: "agency/agency5.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img6: file(relativePath: { eq: "agency/agency6.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img7: file(relativePath: { eq: "agency/agency7.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img8: file(relativePath: { eq: "agency/agency8.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img9: file(relativePath: { eq: "agency/agency9.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img10: file(relativePath: { eq: "agency/agency10.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    Img11: file(relativePath: { eq: "agency/agency11.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

ForClientsPage.propTypes = {
  data: PropTypes.object,
}

export default ForClientsPage
