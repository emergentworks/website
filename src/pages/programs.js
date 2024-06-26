import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import CtaLink from '../components/CtaLink/CtaLink';

import styles from './programs.module.scss';
import { Hero } from '../components/Hero/Hero';

const Tracks = ({ tracks }) => {
  if (!tracks) {
    return null;
  }

  return (
    <ul aria-label="Cohorts" className={cx(styles.tracks)}>
      {tracks.map(({ title, description, date }) => (
        <li>
          <span className={cx(styles.trackDescription, 'mb')}>
            {title} ({date}):{' '}
          </span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};

const ProgramCard = ({
  title,
  subtitle,
  isAcceptingApplications,
  qualifications,
  commitments,
  description,
  links,
  tracks,
}) => {
  console.log(subtitle);
  const shouldShowProgramLinks = isAcceptingApplications && links;
  return (
    <div className={cx(styles.programCard, 'twoUp mb')}>
      <div className="twoUpCard">
        <h3 className={cx(styles.programTitle)}>
          {title}
          <span className={cx(styles.programSubtitle)}>{subtitle}</span>
        </h3>
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
        <div className={cx(styles.description)}>
          {description}
          <Tracks tracks={tracks} />
          <div className={cx(styles.programLinks)}>
            {shouldShowProgramLinks ? (
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
          isAcceptingApplications
          commitments
          links {
            href
            title
          }
          qualifications
          title
          subtitle
          tracks {
            title
            description
            date
          }
        }
      }
    }
  `);

  const programs = data.programs.nodes;

  return (
    <Layout className={styles.page}>
      <SEO title="Programs" />
      <Hero image={getImage(data.hero)} title="Our Programs" />
      <div className={cx(styles.root, 'page-content')}>
        <section>
          <div className="twoUp" style={{ marginTop: '60px' }}>
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
              <p className="tc mb--sm">
                <Link to="/passion-projects">
                  <CtaLink to="/passion-projects">
                    See Our Mentee Projects
                  </CtaLink>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Explore our various programs </h2>
          {programs.map(
            ({
              title,
              subtitle,
              isAcceptingApplications,
              qualifications,
              commitments,
              description,
              links,
              tracks,
            }) => (
              <ProgramCard
                title={title}
                subtitle={subtitle}
                isAcceptingApplications={isAcceptingApplications}
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
  subtitle: PropTypes.string,
  isAcceptingApplications: PropTypes.bool.isRequired,
  qualifications: PropTypes.arrayOf(PropTypes.string),
  commitments: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  tracks: PropTypes.arrayOf(PropTypes.object),
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};
