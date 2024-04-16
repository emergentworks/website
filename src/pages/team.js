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
      <Hero
        className={cx(styles.hero)}
        image={getImage(data.hero)}
        title="Our Team"
      />
      <div className={cx(styles.root, 'page-content')}>
        <p>
          Army’s vision was to build a skilled team representing our communities
          and embodying our mission work. Four years later, we are proud to say
          that we are led by BIPOC individuals who are system-impacted and have
          the lived experiences many of our program graduates have. We
          prioritize hiring skilled program alumni as our very own Executive
          Director had the same journey and is a testament to our program’s
          effectiveness. As such, our team comprises lived experience and
          diverse personal and professional backgrounds, and we create the space
          for them to feel empowered to use their wealth of knowledge, skills,
          and expertise to lead programs and operations. Please take a look at
          our team’s success below:
        </p>
        <ul>
          <li>57% of the team are EW program alumni</li>
          <li>71% of the team are system and justice-impacted</li>
          <li>86% of the team are BIPOC</li>
          <li>57% of the team are female-identifying</li>
          <li>75% of the leadership team are BIPOC</li>
          <li>75% of the leadership team are female-identifying</li>
          <li>
            100% hired program alumni as instructors for Bigger Than The Block
          </li>
        </ul>
        <section className={styles.teamContainer}>
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
