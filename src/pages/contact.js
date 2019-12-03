import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroContentGroup,
  HeroImgGroup,
} from '../components/Hero'
import HeroImg from '../_assets/images/coding.jpg'
import './contact.scss'

const ContactPage = () => (
  <Layout className="contact-us">
    <SEO title="Contact Us" />
    <Hero contentPlacement="right">
      <HeroContentGroup>
        <HeroTitle>Contact us</HeroTitle>
        <HeroContent>
          Have any questions about the code cooperative? We’d love to hear from
          your! Email us at{' '}
          <a href="mailto:hello@codecooperative.org?subject=Mail from Our Site">
            hello@codecooperative.org
          </a>
          .
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
  </Layout>
)

export default ContactPage
