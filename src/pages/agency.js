import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./agency.scss"
import { Triptych, TriptychItem } from "../components/Triptych"
// import VideoImg from "../_assets/images/video-still.png"
// import Video from "../_assets/videos/agency.mp4"
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroContentGroup,
  HeroImgGroup,
} from "../components/Hero"
import Logos from "../_assets/images/Logos.png"

import Rectangle from "../_assets/images/shape-rectangle.svg"

const AgencyPage = () => {
  const data = useStaticQuery(graphql`
    query AgencyQuery {
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
            page
            bio
          }
        }
      }
    }
  `)

  return (
    <Layout className="agency">
      <SEO title="Agency" />
      <section className="pageBanner">
        {/* Using YouTube video for now because I don't have video file locally */}
        <div class="video-background">
          <iframe frameborder="0" height="100%" width="100%" allowFullScreen
            src="https://youtube.com/embed/2B_NL3XcFIw?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1">
          </iframe>
        </div>
        {/* <div class="video-background">
          <video loop muted autoPlay poster={VideoImg} class="fullscreen-bg__video">
              <source src={Video} type="video/mp4"/>
          </video>
        </div> */}
        <div className="pageBanner-inner content">
          <div className="pageBanner-title mtnone tagline">
            <h2>
              We build tech for non-profits and invest in the next generation of
              technology leaders.
            </h2>
            <a
              className="btn btn-primary get-in-touch centered"
              href="mailto:agency@codecooperative.org?subject=Let%27s%20chat%21"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
      <Triptych>
        <TriptychItem
          url="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png"
          header="Full Stack Website Solutions"
        >
          <p>
            {" "}
            Our team of web developers can deliver you anything from a fully
            bespoke website, to SquareSpace customizations, to internal tooling.{" "}
          </p>
        </TriptychItem>
        <TriptychItem
          url="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png"
          header="Impact, not just code"
        >
          <p>
            {" "}
            Experienced product leads guarantee that teams not only deliver the
            technology you want, but the business outcomes you need.{" "}
          </p>
        </TriptychItem>
        <TriptychItem
          url="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png"
          header="Investing in your community"
        >
          <p>
            {" "}
            Through our projects, our formerly incarcerated teammates get
            valuable, paid work experience to kickstart their careers in tech.{" "}
          </p>
        </TriptychItem>
      </Triptych>
      <section className="ourTeam-section">
        <div className="ourTeam-groupInner content">
          <h2 className="ourValues-title">Our Team</h2>

          <div className="agency-group">
            {data.teamData.edges.map(nodes => {
              const teamMember = nodes.node
              if (!teamMember.page.includes("agency")) return null

              const getImgSrc = data.teamPics.nodes.filter(image => {
                const [firstName] = teamMember.name.toLowerCase().split(" ")
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
                    <p>{teamMember.bio}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="space-below">
        <div className="hero-content content">
          <h2 classname="ourValues-title">
            We've built successful products for...
          </h2>
          <div className="aboutUs-bottomGroup aboutUs-photo">
            <img className="logos-img" src={Logos} alt="Places we've worked" />
          </div>
        </div>
      </section>
      <section>
        <div className="hero-content content">
          <h2 classname="ourValues-title">Let's work together.</h2>
          <div className="pagebanner-content">
            Whether you have a project in mind, or need help defining it, we'd
            love to work with you.
          </div>
          <a
            className="btn btn-primary get-in-touch"
            href="mailto:agency@codecooperative.org?subject=Let%27s%20chat%21"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default AgencyPage
