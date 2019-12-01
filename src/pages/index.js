import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Image from "../components/image"
import SEO from '../components/seo'
import logo from '../_assets/images/logo--stacked.svg'

const IndexPage = () => (
  <Layout className="home">
    <SEO title="Home" />
    <section className="homepage-hero">
      <div className="homepage-heroInner content">
        <div className="heroLogo-group">
          <img
            className="heroLogo"
            src={logo}
            alt="The code cooperative logo"
          />
        </div>
        <div className="heroContent-group">
          <p className="heroLogo-content">
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
          </p>
          <Link to="/about" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
