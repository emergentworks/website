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
          <p>
            Emergent Works is a community of people who learn, use, and build
            technology as a means of liberation. We bridge the gap between the
            tech industry and historically underserved communities impacted by
            mass incarceration by offering free access to the technology,
            education, and resources necessary to enter into careers in tech.
          </p>
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
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
          <p>
            EW provides digital literacy and software development training to
            returning citizens by pairing them with senior software engineers
            through our mentorship program. Over four months, participants gain
            access to a supportive community of learners and professionals,
            educational resources, and our tech industry network to support them
            as they embark on their journeys to careers in tech.
          </p>
          <p>
            EW augments the mentorship program by equipping participants with
            lifelong access to our online and in-person community and resources.
            We support alumni in securing jobs, apprenticeships, and further
            educational pathways through our partner organizations. The
            relationships and bonds that form during the mentorship program
            provide our community members with the requisite care, support, and
            resources they need to overcome the challenges that returning
            citizens often face. Access to this community means that mentees are
            provided with support, guidance, and the assurance that a community
            of like-minded and experienced technologists will be there to answer
            their questions throughout their journeys.
          </p>
          <p>
            EW further supports our community through the Emergent Works Agency
            Engineering Leadership Program. During the program, associate
            software engineers with a history of incarceration are mentored by
            our team of senior software engineers and tech industry veterans.
            Throughout this program, associate engineers explore the full gamut
            of practical, on-the-job experience, contributing production code on
            numerous agency software development projects.
          </p>
          <p>
            EW’s holistic programming model provides exposure, support, and
            access to opportunities necessary for returning citizens to forge
            successful pathways into life-sustaining careers as software
            engineer and technologists.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default AboutPage;
