import React from 'react';
import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';

// import styles from './about.module.scss';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className={cx('content')}>
        <h1 className={cx('title', 'content-max-width')}>
          About our Organization
        </h1>
        <div>
          <p>Emergent Works is a community of people that:</p>
          <ul>
            <li>
              envisions a world where tech literacy, education, and skills-based
              training are freely available to the individuals and communities,
              disproportionately of color, impacted by mass incarceration.
            </li>
            <li>
              realizes this vision through developing software products and
              educational programs that provide mentorship and a pathway to
              careers in tech to these communities.
            </li>
            <li>
              bridges the gap between the tech industry and historically
              underserved communities impacted by mass incarceration by offering
              free access to the technology, education, and resources necessary
              to enter into careers in tech.
            </li>
          </ul>
          <p>
            EW employs a multi-pronged strategic approach to bridge this gap and
            to generate large-scale systemic change in the opportunities
            available to returning citizens.
          </p>
          <div className="rightColumn">
            <div className="videoWrapper">
              <iframe
                title="Emergent Works Docu-series Commercial"
                className="youtubeVideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uTGXZL_sGTo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
          <p>
            EW provides digital literacy and software development training to
            returning citizens by pairing them with senior software engineers
            through our mentorship program.
          </p>
          <p>
            EW augments the mentorship program by equipping participants with
            lifelong access to our online and in-person community and resources.
            We support alumni in securing jobs, apprenticeships, and further
            educational pathways.
          </p>
          <p>
            EW builds technology to catalyze the community-driven work of
            individuals and organizations working to end the crisis of mass
            incarceration. Through our LEAP program, we hire associate software
            engineers with a history of legal system involvement that inform and
            build our products while working alongside, being mentored by, and
            sharing the knowledge of their experience with tech industry
            veterans on our engineering team.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
