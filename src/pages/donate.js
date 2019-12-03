import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './donate.scss'
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroContentGroup,
  HeroImgGroup,
} from '../components/Hero'
import HeroImg from '../_assets/images/we-are-the-code-coop.jpg'

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
    <Hero contentPlacement="right">
      <HeroContentGroup>
        <HeroTitle>Make a donation</HeroTitle>
        <HeroContent>
          Help us reach our goal to raise <span className="bold">$50,000</span>{' '}
          for our next program.
        </HeroContent>
      </HeroContentGroup>
      <HeroImgGroup>
        <img
          className="pageHero-img"
          src={HeroImg}
          alt="We are the code coop"
        />
      </HeroImgGroup>
    </Hero>
    <section className="donation-section">
      <div className="donation-inner content">
        <div className="donation-contentGroup">
          <h2 className="donation-title">Donate to code cooperative</h2>
          <p className="donation-content">
            Our program runs on donations so that we can provide resources for
            our fellows. Access to a computer and the Internet is crucial to
            learning to code, which is why we are seeking monetary and laptop
            donations. Code cooperative could not be where it is today without
            donations. We are a registered 501(c)(3) not-for-profit trying to
            bridge the gap between the tech industry and those impacted by
            incarceration.
          </p>
          <p>
            Monetary support will help us provide Metrocards, food, hardware and
            office supplies for our fellows.
          </p>
          <p>
            Code cooperative could not be where it is today without donations.
            We are a registered 501(c)(3) not-for-profit trying to bridge the
            gap between the tech industry and those impacted by incarceration.
          </p>
        </div>
        <div className="donation-donorboxGroup">
          <script
            src="https://donorbox.org/widget.js"
            paypalExpress="false"
          ></script>
          <iframe
            allowpaymentrequest=""
            className="donation-donorbox"
            frameBorder="0"
            name="donorbox"
            scrolling="no"
            height="632px"
            seamless="seamless"
            src="https://donorbox.org/embed/website-donation-15?hide_donation_meter=true"
            style={{
              maxWidth: '500px',
              minWidth: '310px',
              maxHeight: 'none!important',
            }}
            width="100%"
            title="Donate to the Code Cooperative"
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
)

export default DonatePage
