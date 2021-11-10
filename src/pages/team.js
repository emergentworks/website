import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Button from 'components/Button';
import styles from './team.module.scss';

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      teamPics: allFile(filter: { relativeDirectory: { eq: "team-core" } }) {
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
            imgAltText
            twitter
            role
          }
        }
      }
    }
  `);

  const teamData = data.teamData.edges;
  const teamPics = data.teamPics.nodes;

  const getImgSrc = (filename) => {
    return teamPics.find((image) => {
      return image.name.includes(filename);
    }).childImageSharp.fluid;
  };

  return (
    <Layout className={styles.page}>
      <SEO title="Team" />
      <div className={cx(styles.root, 'content')}>
        <section className={cx(styles.gridContainer12, 'content')}>
          <h1 className={cx(styles, 'content-max-width')}>
            We are the Emergent Works Family.
          </h1>
          <div>
            <p>
              We believe that developing software and educational programming
              that is responsive to the problems our clients and society face,
              necessitates that our team be representative of the diverse range
              of perspectives in the world. Having team members with direct
              lived experience with the problems we solve for our clients and
              communities allows us to build products and programs that are both
              inclusive and sensitive to the lives of the people that interact
              with and are impacted by them.
            </p>
          </div>
        </section>

        <section className={cx(styles.gridContainer12, 'content')}>
          <h2 className={cx(styles, 'content-max-width')}>Meet the Team</h2>
          <div className={styles.team}>
            {teamData.map((person) => (
              <div key={person.node.id} className={styles.person}>
                <div className={styles.image}>
                  <Img
                    className={cx(styles.img)}
                    fluid={getImgSrc(person.node.img)}
                    alt={person.node.imgAltText}
                  />
                </div>
                <h3 className={styles.name}>{person.node.name}</h3>
                <div className={styles.role}>{person.node.role}</div>
              </div>
            ))}
          </div>
        </section>

        <br />
        <br />
        <br />

        <section className={cx(styles.gridContainer12, 'content')}>
          <h2 className={cx(styles, 'content-max-width')}>We're Hiring</h2>
          <div>
            <p>
              We're always looking for highly-motivated, mission-driven people
              to join our team.
            </p>
            <Button
              to="https://boards.greenhouse.io/emergentworks"
              className="mt--lg"
            >
              See open roles
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
