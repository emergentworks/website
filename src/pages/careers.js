import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Button from 'components/Button';
import group from '../_assets/images/group1.png';
import styles from './careers.module.scss';

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="Careers" />
      <section className="content">
        <h1>Careers</h1>
        <div className={cx(styles.mainImage)}>
          <img src={group} alt="Members of the Emergent Works team" />
        </div>
        <p>
          Are you tired of working on problems with solutions that don't drive
          positive social change? Do you want to work with a group of people as
          diverse and interesting as the world we live in? Then come join us at
          Emergent Works!
        </p>
        <p>
          We're solving one of the world's most pressing problems—mass
          incarceration—by assembling a world-class community and team that
          brings their diverse perspectives and full selves to the products and
          programs we build.
        </p>
        <p>
          If you're interested in joining us to make the world a better place
          while loving the work you do, check out our open roles below. We can't
          wait to learn about the experiences, talents, and perspectives you'll
          bring to the team!
        </p>

        <p>
          <Button href="https://boards.greenhouse.io/emergentworks">
            See open roles
          </Button>
        </p>

        <p>
          Don't see the role you are looking for? Drop us a line at{' '}
          <a href="mailto:jobs@emergentworks.org">jobs@emergentworks.org</a>{' '}
          with a write-up about your ideal job, why you want to join the team,
          and a copy of your resume and someone will get back to you.
        </p>
      </section>
    </Layout>
  );
};

export default TeamPage;
