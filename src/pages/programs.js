import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import CtaLink from '../components/CtaLink/CtaLink';

import styles from './programs.module.scss';
import { Hero } from '../components/Hero/Hero';

const Tracks = ({ tracks }) => {
  if (!tracks) {
    return null;
  }

  return (
    <ul aria-label="Program Tracks">
      {tracks.map(({ title, description }) => (
        <li>
          <span className={cx(styles.description)}>{title}: </span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};

const ProgramCard = ({
  title,
  qualifications,
  commitments,
  description,
  links,
  tracks,
}) => {
  return (
    <div className={cx(styles.programCard, 'twoUp mb')}>
      <div className="twoUpCard">
        <h3 className={cx(styles.programTitle)}>{title}</h3>
      </div>
      <div className={cx(styles.programInfo, 'twoUpCard')}>
        {qualifications && (
          <ul aria-label="Qualifications">
            {qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {commitments && (
          <ul aria-label="Commitment">
            {commitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div>
          <p>
            <span className={cx(styles.description)}>Description: </span>
            {description}
            <Tracks tracks={tracks} />
          </p>
          <div className={cx(styles.programLinks)}>
            {links ? (
              links.map((link) => (
                <CtaLink href={link.href}>{link.title}</CtaLink>
              ))
            ) : (
              <span>
                <em>More information coming soon!</em>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativeDirectory: { eq: "hero" }, name: { eq: "programs" }) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH)
        }
      }
      programs: allProgramsJson {
        nodes {
          description
          commitments
          links {
            href
            title
          }
          qualifications
          title
          tracks {
            title
            description
          }
        }
      }
    }
  `);

  const programs = data.programs.nodes;

  return (
    <Layout className={styles.page}>
      <SEO title="Programs" />
      <div className={cx(styles.root)}>
        <Hero image={getImage(data.hero)} title="Our Programs" />
        <section>
          <p className={cx(styles.prominent, 'tc')}>
            We imagine a world where technical education unlocks equitable
            economic mobility for system impacted communities
          </p>
          <div className="twoUp">
            <div className="twoUpCard">
              <StaticImage
                src="../_assets/images/programs/programming.jpg"
                alt="Mentorship Program participants"
                cropFocus="attention"
              />
            </div>
            <div className="twoUpCard">
              <h2>Technical Education Programming</h2>
              <p>
                Emergent Works trains individuals who were formerly-incarcerated
                and those impacted by the criminal legal system through
                technical programming that provides free access to education,
                resources, a safe community, and employment opportunities.
                Through our programs, we hope to help end the revolving door of
                mass incarceration by closing the wealth gap and digital divide.
              </p>

              <p>
                Our three programs cater to different needs as well as various
                learning levels.
              </p>
              <ul>
                <li>In-person Program (Bigger Than The Block)</li>
                <li>Virtual Program (1:1 Technical Mentorship)</li>
                <li>Apprenticeship (Leadership Apprentice Program) </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our various programs </h2>
          {programs.map(
            ({
              title,
              qualifications,
              commitments,
              description,
              links,
              tracks,
            }) => (
              <ProgramCard
                title={title}
                qualifications={qualifications}
                commitments={commitments}
                description={description}
                links={links}
                tracks={tracks}
              />
            )
          )}
        </section>
      </div>
    </Layout>
  );
};

export default ProgramsPage;

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  qualifications: PropTypes.arrayOf(PropTypes.string),
  commitments: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  tracks: PropTypes.arrayOf(PropTypes.object),
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};
