import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import CtaLink from '../../components/CtaLink/CtaLink';

import styles from './styles.module.scss';
import { Hero } from '../../components/Hero/Hero';

const ProjectCard = ({
  program,
  student,
  cohort,
  description,
  github,
  img,
}) => {
  const image = getImage(img);
  return (
    <div key={student} className="twoUp">
      <div className="twoUpCard">
        <h3>{program}</h3>
        <div>{student}</div>
        <div>{cohort}</div>
        <p>{description}</p>
        {github && <CtaLink href={github}>View Project</CtaLink>}
      </div>
      <div className="twoUpCard">
        <GatsbyImage src={image} alt={student} cropFocus="attention" />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  program: PropTypes.string.isRequired,
  student: PropTypes.string.isRequired,
  cohort: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string,
};

const PassionProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "programs" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
      projects: passionProjectsJson {
        data {
          student
          cohort
          description
          github
          program
          img {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
    }
  `);

  const projects = data.projects.data;

  return (
    <Layout className={styles.page}>
      <SEO title="Programs" />
      <Hero image={getImage(data.hero)} title="Grauduation Projects" />
      <div className={cx(styles.root, 'page-content')}>
        <section>
          <p className={cx(styles.prominent, 'tc')}>
            Our mentees build technical projects of their choice by applying
            their newly acquired technical skills gained during our program
          </p>
          <div className="twoUp">
            <div className="twoUpCard">
              <StaticImage
                src="./projects1.jpg"
                alt="Mentorship Program participants"
                cropFocus="attention"
              />
            </div>
            <div className="twoUpCard">
              <h2>Technical Skills Expressed in a Passion Project </h2>
              <p>
                Our 1:1 Technical Mentorship program equips our mentees with
                valuable technical and soft skills during the cohort. As part of
                their graduation each mentee develops and builds a passion
                project of their choice that incorporates their newly learned
                skills. This gives our mentees real life experience with their
                skills as well as a project for their portfolio they can use for
                further career building.
              </p>
              <p>
                We have seen incredible passion projects over the years
                including websites, online games, UI/UX design, apps and much
                more. It is always a privilege to witness all the innovative and
                creative ideas our mentees are able to realize in a short time
                frame. We are excited to see everything there is yet to come
                from them on their continued professional development journey.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our mentee passion projects</h2>
        </section>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default PassionProjects;
