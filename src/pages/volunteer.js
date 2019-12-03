import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './volunteer.scss'
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroContentGroup,
  HeroImgGroup,
} from '../components/Hero'
import HeroImg from '../_assets/images/mentoring-at-code-coop.jpg'

const VolunteerPage = () => (
  <Layout className="volunteer">
    <SEO title="Volunteer" />
    <Hero>
      <HeroContentGroup>
        <HeroTitle>Become a mentor</HeroTitle>
        <HeroContent>
          Mentors work in small groups with our fellows to meet their learning
          goals. Supported by our core team, our mentors coach our students as
          they learn essential skills in computer literacy, code, and web
          development.
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7qxJ6HhsJBs7nZPUuTFW2wIDLtwlffpT7NzNR9SaDt7cfOg/viewform"
            className="btn btn-primary w-100 mtbase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Mentor
          </a>
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

    <section className="volunteer-videoSection">
      <div className="volunteer-videoInner content">
        <h2 className="volunteer-videoTitle">Meet the mentors</h2>
        <iframe
          src="https://player.vimeo.com/video/316857444"
          // width="640"
          // height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Meet the mentors of code coop"
          className="volunteer-video"
        ></iframe>
      </div>
    </section>

    <section className="volunteerFaq-section">
      <div className="volunteerFaq-inner content">
        <h2 className="volunteerFaq-sectionTitle">FAQ</h2>
        <article className="volunteerFaq-item">
          <h3 className="volunteerFaq-itemTitle">
            What type of mentors are we looking for?
          </h3>
          <div className="volunteerFaq-itemContent">
            <p>We look for mentors that are:</p>
            <ul>
              <li>
                Passionate about working with Justice-Involved individuals
              </li>
              <li>Highly competent with web development technologies</li>
              <li>Empathetic, patient and adaptable</li>
              <li>Extremely reliable and punctual</li>
              <li>Willing to go the extra mile to help a student</li>
              <li>Excellent communicators</li>
            </ul>
          </div>
        </article>
        <article className="volunteerFaq-item">
          <h3 className="volunteerFaq-itemTitle">
            What is the time commitment?
          </h3>
          <div className="volunteerFaq-itemContent">
            <p>
              Time commitment depends on the time of year and how many fellows
              we get but a typical semester looks like:
            </p>
            <ul>
              <li>16 weeks starting </li>
              <li>Classes are on Saturday 9am – 5pm</li>
              <li>Office hours are Tuesdays 6pm – 8pm</li>
            </ul>
          </div>
        </article>
        <article className="volunteerFaq-item">
          <h3 className="volunteerFaq-itemTitle">
            I'm interested! How does the process look like?
          </h3>
          <div className="volunteerFaq-itemContent">
            <p>
              That's great! Please click the button below and fill out the form.
              Within a week, someone from our team will get in touch with you.
              The process will look like this:
            </p>
            <ol className="mbnone">
              <li>Phone interview</li>
              <li>In-person interview</li>
              <li>Invitation to become a mentor</li>
              <li>Mentorship training</li>
            </ol>
            <button type="button" className="btn btn-primary mtbase">
              Become a Mentor
            </button>
          </div>
        </article>
      </div>
    </section>

    <section className="volunteer-support">
      <div className="volunteer-supportInner content">
        <div className="volunteer-contentGroup">
          <h2 className="volunteer-supportTitle mtnone">
            Other ways to support
          </h2>
          <p className="volunteer-supportContent">
            We all have busy lives and volunteering can be hard to fit into your
            schedule. Consider making a monetary donation to support the
            program.
          </p>
        </div>
        <div className="volunteer-donorboxGroup">
          <script
            src="https://donorbox.org/widget.js"
            paypalexpress="false"
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

export default VolunteerPage
