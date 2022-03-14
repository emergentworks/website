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
