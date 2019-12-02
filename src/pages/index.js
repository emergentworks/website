import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Image from "../components/image"
import SEO from '../components/seo'
import logo from '../_assets/images/logo--stacked.svg'
import './index.scss'

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
          {/* <div className="heroLogo-shape"></div> */}
        </div>
        <div className="heroContent-group">
          <p className="heroLogo-content">
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
          </p>
          <Link to="/about" className="btn btn-primary w-100">
            Learn More
          </Link>
        </div>
      </div>
    </section>
    <section className="homepage-cardGroup content">
      <div className="card--photoCard photoCard--card-1">
        <h2 className="card-title">About</h2>
        <p className="card-content">
          We believe that providing access to computer science education to the
          most marginalized communities in our society.
        </p>
        <Link className="card-cta btn btn-secondary w-100">Learn More</Link>
      </div>
      <div className="card--photoCard photoCard--card-2">
        <h2 className="card-title">Volunteer</h2>
        <p className="card-content">
          Our mentors work with fellows to meet their learning goals in computer
          literacy, code, and web development.
        </p>
        <Link className="card-cta btn btn-secondary w-100">Learn More</Link>
      </div>
      <div className="card--photoCard photoCard--card-3">
        <h2 className="card-title">Donate</h2>
        <p className="card-content">
          Our program runs on donations so that we can provide Metrocards, food,
          hardware and office supplies for our fellows.
        </p>
        <Link className="card-cta btn btn-secondary w-100">Donate Now</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
