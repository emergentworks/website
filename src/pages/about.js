import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './about.scss'
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroContentGroup,
  HeroImgGroup,
} from '../components/Hero'
import HeroImg from '../_assets/images/we-are-the-code-coop.jpg'
import Mark from '../_assets/images/mark.jpg'
import Classroom from '../_assets/images/classroom.jpg'
import Rectangle from '../_assets/images/shape-rectangle.svg'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      teamPics: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        nodes {
          name
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      teamData: allTeamJson {
        edges {
          node {
            id
            name
            img
            twitter
          }
        }
      }
    }
  `)

  return (
    <Layout className="about">
      <SEO title="About" />
      <Hero contentPlacement="right">
        <HeroContentGroup>
          <HeroTitle>Who we are</HeroTitle>
          <HeroContent>
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
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
      <section className="pageBanner">
        <div className="pageBanner-inner content">
          <h2 className="pageBanner-title mtnone">Our Vision</h2>
          <p className="pageBanner-content">
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
          </p>
        </div>
        <img className="pageBanner-shape" src={Rectangle} alt="" />
      </section>
      <section className="aboutUs-section">
        <div className="aboutUs-inner content">
          <div className="aboutUs-topGroup aboutUs-photo">
            <img
              className="topGroup-img"
              src={Mark}
              alt="We are the code coop"
            />
          </div>
          <div className="aboutUs-contentGroup">
            <p className="aboutUs-content">
              <span className="bold">
                We are a community of people who dare to dream of healed worlds.
                We are a collective of passionate volunteers.
              </span>{' '}
              We see a problem that we want to address. The tech industry is a
              closed and homogenous group that builds things that serve some
              people and not others. Things that harm a lot of people. We want
              to democratize access to tech education and teach our most
              vulnerable populations highly valuable skills that will allow us
              to have access to more opportunities, to create opportunities for
              ourselves, and to build technology that solves real problems that
              we have identified and experienced.
            </p>
          </div>
          <div className="aboutUs-bottomGroup aboutUs-photo">
            <img
              className="bottomGroup-img"
              src={Classroom}
              alt="We are the code coop"
            />
          </div>
        </div>
      </section>
      {/* <section className="ourValue">
        <div className="ourValues-inner content">
          <h2 className="ourValues-groupTitle">Our Values</h2>

          <div className="ourValues-group">
            <article className="ourValues-item">
              <h3 className="ourValues-title">Justice</h3>
              <p className="ourValues-content">
                We center the power of those directly impacted by injustice and
                commit to equity of opportunity.
              </p>
            </article>
            <article className="ourValues-item">
              <h3 className="ourValues-title">Community</h3>
              <p className="ourValues-content">
                We center the power of those directly impacted by injustice and
                commit to equity of opportunity.
              </p>
            </article>
            <article className="ourValues-item">
              <h3 className="ourValues-title">Truth</h3>
              <p className="ourValues-content">
                We express the truth in a brave, honest, and questioning manner.
              </p>
            </article>
            <article className="ourValues-item">
              <h3 className="ourValues-title">Exploration</h3>
              <p className="ourValues-content">
                We practice creativity and curiosity as we learn to cocreate the
                world we want to live in.
              </p>
            </article>
          </div>
        </div>
      </section> */}
      <section className="ourTeam-section">
        <div className="ourTeam-groupInner content">
          <h2 className="ourValues-title">Our Team</h2>

          <div className="ourTeam-group">
            {data.teamData.edges.map(nodes => {
              const teamMember = nodes.node

              const getImgSrc = data.teamPics.nodes.filter(image => {
                const [firstName] = teamMember.name.toLowerCase().split(' ')

                if (image.name.includes(firstName)) {
                  return image.childImageSharp.fluid
                }

                return null
              })

              return (
                <article className="ourTeam-item" key={teamMember.name}>
                  <div className="ourTeam-imageGroup">
                    <Img
                      fluid={getImgSrc[0].childImageSharp.fluid}
                      className="ourTeam-image"
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="ourTeam-content">
                    <h3 className="ourTeam-name">{teamMember.name}</h3>
                    {teamMember.twitter && (
                      <a
                        className="ourTeam-twitter"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://twitter.com/${teamMember.twitter}`}
                      >
                        @{teamMember.twitter}
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
