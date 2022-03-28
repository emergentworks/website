import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
            gatsbyImageData(layout: FULL_WIDTH)
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
    }).childImageSharp.gatsbyImageData;
  };

  return (
    <Layout className={styles.page}>
      <SEO title="Team" />
      <section className={cx(styles.root, 'content')}>
        <h1>We are the Emergent Works Family.</h1>
        <p>
          We are flautists (yes, it is spelled that way!), breakfast (only)
          chefs, giant mug collectors, and competitive Waldo finders who hail
          from the Ivory Coast, Brooklyn, San Francisco, Minneapolis, and
          Montana.
        </p>
        <p>
          Every day we feel lucky to bring these experiences, and perspectives
          that have shaped who we are to the products and programs we build to
          end the crisis of mass incarceration.
        </p>
        <p>
          Want to join our team? We're always looking for highly-motivated,
          mission-driven people to build with us. If you’re interested in
          joining the team you can check out our open roles below.
        </p>
        <p>
          <Button href="https://boards.greenhouse.io/emergentworks">
            See open roles
          </Button>
        </p>
      </section>

      <section className="content">
        <h2 className={cx('content-max-width')}>Meet the Team</h2>
        <div className={styles.team}>
          {teamData.map((person) => (
            <div key={person.node.id} className={styles.person}>
              <div className={styles.image}>
                <GatsbyImage
                  image={getImgSrc(person.node.img)}
                  className={cx(styles.img)}
                  alt={person.node.imgAltText}
                />
              </div>
              <h3 className={styles.name}>{person.node.name}</h3>
              <div className={styles.role}>{person.node.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="content">
        <h2>We're Hiring!</h2>
        <p>
          We're always looking for highly-motivated, mission-driven people to
          join our team.
        </p>
        <Button href="https://boards.greenhouse.io/emergentworks">
          See open roles
        </Button>
      </section>
    </Layout>
  );
};

export default TeamPage;
