import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './about.module.scss';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuer {
      sponsors: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
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
    }
  `);

  // const teamData = data.teamData.edges
  // const teamPics = data.teamPics.nodes
  const sponsors = data.sponsors.nodes;

  // const getImgSrc = name =>
  //   teamPics.filter(image => {
  //     if (!image.name.includes(name)) {
  //       return null
  //     }

  //     return image
  //   })[0].childImageSharp.fluid

  return (
    <Layout className={styles.page}>
      <SEO title="About" />
      <section className={cx('content')}>
        <h1 className={cx('title', 'content-max-width')}>
          About our Organization
        </h1>
        <div>
          <p>
            Emergent Works is a community of people who learn, use, and build
            technology as a means of liberation. We bridge the gap between the
            tech industry and historically underserved communities impacted by
            mass incarceration by offering free access to the technology,
            education, and resources necessary to enter into careers in tech.
          </p>
          <p>
            EW employs a multi-pronged strategic approach to bridge this gap and
            to generate large-scale systemic change in the opportunities
            available to returning citizens.
          </p>
          <p>
            EW provides digital literacy and software development training to
            returning citizens by pairing them with senior software engineers
            through our mentorship program. Over four months, participants gain
            access to a supportive community of learners and professionals,
            educational resources, and our tech industry network to support them
            as they embark on their journeys to careers in tech.
          </p>
          <p>
            EW augments the mentorship program by equipping participants with
            lifelong access to our online and in-person community and resources.
            We support alumni in securing jobs, apprenticeships, and further
            educational pathways through our partner organizations. The
            relationships and bonds that form during the mentorship program
            provide our community members with the requisite care, support, and
            resources they need to overcome the challenges that returning
            citizens often face. Access to this community means that mentees are
            provided with support, guidance, and the assurance that a community
            of like-minded and experienced technologists will be there to answer
            their questions throughout their journeys.
          </p>
          <p>
            EW further supports our community through the Emergent Works Agency
            Engineering Leadership Program. During the program, associate
            software engineers with a history of incarceration are mentored by
            our team of senior software engineers and tech industry veterans.
            Throughout this program, associate engineers explore the full gamut
            of practical, on-the-job experience, contributing production code on
            numerous agency software development projects.
          </p>
          <p>
            EW’s holistic programming model provides exposure, support, and
            access to opportunities necessary for returning citizens to forge
            successful pathways into life-sustaining careers as software
            engineer and technologists.
          </p>
        </div>
      </section>

      <hr className={cx('content')} />

      {/* <section className={cx(styles.gridContainer12, 'content')}>
        <h1 className={cx(styles, 'content-max-width')}>
          Meet the Team
        </h1>
        <div className={styles.team}>

          {teamData.map(person => (
            <div key={person.node.id} className={styles.person}>
              <div className={styles.image}>
                <Img
                  className={cx(styles.img)}
                  fluid={getImgSrc(person.node.name)}
                  alt={`Image of ${person.node.name}`}
                />
              </div>
              <h4 className={styles.name}>{person.node.name}</h4>
              <div className={styles.role}>{person.node.role}</div>
            </div>
          ))}
        </div>
      </section>
      <br />
      <br />
      <br /> */}

      <section className={cx(styles.gridContainer12, 'content')}>
        <h2 className={cx(styles, 'content-max-width')}>Our Partners</h2>
        <div>
          <p>
            We believe that realizing our vision of creating life-changing
            impact for our communities through developing exceptional digital
            experiences and educational programming means partnering with
            inspiring organizations to catalyze our shared work. These are some
            of the incredible organizations with which we partner.
          </p>
        </div>
      </section>

      <br />

      <section className={cx(styles.gridContainer12, 'content')}>
        <div className={styles.partners}>
          {/* <h1 className={cx(styles.subtitle, 'content-max-width')}>
            These are some of the incredible organizations we partner with.
          </h1> */}
          <div className={styles.logoGroup}>
            {sponsors.map((logo) => (
              <div key={logo.id} className={styles.logoItem}>
                <Img
                  className={cx(styles.logo)}
                  fluid={logo.childImageSharp.fluid}
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
