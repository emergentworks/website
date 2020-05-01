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
        <p>
          The Code Cooperative creates life-changing opportunities in technology
          for people impacted by incarceration. We offer high-quality tech education
          to formerly incarcerated people and while
          reducing the stigma associated with prison within the tech industry.
        </p>
        <p>
          During this difficult time, we are launching a 1-on-1 mentorship
          program to match Code Cooperative community members with virtual
          mentors to further their learning. This is a 3-month program in which
          professional software engineers and designers mentor formerly incarcerated and
          justice-involved mentees.
        </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9GW3E8zeOW-fXvdjgNlrnPsXo-19lZhc26_ShW91oY9FNIg/viewform"
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
        <h2 className="volunteer-videoTitle">Meet Our Mentors</h2>
        <iframe
          src="https://player.vimeo.com/video/316857444"
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
            <ul className="bullet-list">
              <li>
                Passionate about working with justice-involved folks
              </li>
              <li>Highly competent with web development technologies</li>
              <li>Empathetic, patient, and adaptable</li>
              <li>Extremely reliable and punctual</li>
              <li>Willing to go the extra mile to help a student</li>
              <li>Excellent communicators</li>
            </ul>
          </div>
        </article>
        <article className="volunteerFaq-item">
          <h3 className="volunteerFaq-itemTitle">
            What does mentorship look like?
          </h3>
          <div className="volunteerFaq-itemContent">
            <p>
              We ask that mentors and mentees commit to weekly 2-hour
              mentorship sessions for 3 months.
            </p>
            <ul className="bullet-list">
              <li>Meet once a week for 3 months (preferably evening or weekends)</li>
              <li>2 hours / week</li>
              <li>Via Zoom or Google Hangouts</li>
              <li>Topics (HTML, CSS, Javascript, Node, React, Ruby on Rails, etc.)</li>
              <li>Mentors help mentees design and build a project of their choosing</li>
              <li>Our program is completely free for mentees</li>
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
            <ol className="mbnone bullet-list">
              <li>15-min intro call</li>
              <li>30-min video interview</li>
              <li>Invitation to become a mentor</li>
              <li>Mentorship training</li>
            </ol>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9GW3E8zeOW-fXvdjgNlrnPsXo-19lZhc26_ShW91oY9FNIg/viewform "
              className="btn btn-primary mtbase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Mentor
            </a>
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
