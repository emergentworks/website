import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Hero } from '../components/Hero/Hero';
import styles from './team.module.scss';

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "team" }) {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 3
            layout: FULL_WIDTH
            transformOptions: { cropFocus: ENTROPY }
          )
        }
      }
      teamPics: allFile(filter: { relativeDirectory: { eq: "team-core" } }) {
        nodes {
          name
          id
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              transformOptions: { cropFocus: NORTH }
            )
          }
        }
      }
      teamData: allTeamJson {
        edges {
          node {
            name
            role
            img
          }
        }
      }
    }
  `);

  const teamData = data.teamData.edges;
  const teamPics = data.teamPics.nodes;

  const getImgSrc = (filename) => {
    const gatsbyImage = teamPics.find((image) => image.name === filename);
    return getImage(gatsbyImage);
  };

  return (
    <Layout className={styles.page}>
      <SEO title="Team" />
      <div className={cx(styles.root)}>
        <Hero
          className={cx(styles.hero)}
          image={getImage(data.hero)}
          title="Our Team"
        />
        <section>
          <div className={styles.team}>
            {teamData.map((person) => (
              <div key={person.node.id} className={styles.card}>
                <div className={styles.image}>
                  <GatsbyImage
                    image={getImgSrc(person.node.img)}
                    className={cx(styles.img)}
                    alt={person.node.name}
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{person.node.name}</span>
                  <div className={styles.role}>{person.node.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
