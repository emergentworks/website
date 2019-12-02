import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './about.scss'
import HeroImg from '../_assets/images/we-are-the-code-coop.jpg'
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
      <section className="pageHero pageHero--contentRight">
        <div className="pageHero-inner content">
          <div className="pageHero-contentGroup">
            <h1 className="pageHero-title">Who we are</h1>
            <p className="pageHero-content">
              The Code Cooperative is a community of people who learn, use, and
              build technology to create life changing possibilities for
              individuals and communities impacted by incarceration.
            </p>
          </div>
          <div className="pageHero-imgGroup">
            <img
              className="pageHero-img"
              src={HeroImg}
              alt="We are the code coop"
            />
          </div>
        </div>
      </section>
      <section className="pageBanner">
        <div className="pageBanner-inner content">
          <h2 className="pageBanner-title">Our Vision</h2>
          <p className="pageBanner-content">
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
          </p>
        </div>
        <img className="pageBanner-shape" src={Rectangle} alt="" />
      </section>
      <section className="ourValue">
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
      </section>
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
