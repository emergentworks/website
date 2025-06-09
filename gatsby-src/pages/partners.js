import React from 'react';
// import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { PartnersModule } from '../components/PartnersModule/PartnersModule';
import CtaLink from '../components/CtaLink/CtaLink';

// import styles from './partners.module.scss';

const PartnersPage = () => {
  return (
    <Layout>
      <SEO title="Partners" />
      <section className="page-content">
        <h1>Partner With Us</h1>
        <p>
          At Emergent Works, we are dedicated to empowering formerly
          incarcerated individuals through digital literacy, web development,
          and branding design education. Our mission is to create pathways to
          economic opportunity and personal growth for those impacted by the
          criminal legal system. We invite you to join us in this transformative
          journey and make a lasting impact in our community.
          <ul>
            <li>
              <span className="fwb">Unlock Potential</span>: Help our graduates
              secure meaningful employment by offering job placements and
              internships. Your organization can be a stepping stone for
              talented individuals ready to contribute their skills and
              creativity.
            </li>
            <li>
              <span className="fwb">Foster Community Growth</span>: Host
              community sessions to share your expertise and provide valuable
              insights. Your involvement can inspire and guide our members,
              helping them navigate their career paths with confidence.
            </li>
            <li>
              <span className="fwb">Provide Essential Resources</span>: Support
              our community by providing access to resources and tools that can
              enhance their learning and professional development. Your
              contributions can make a significant difference in their journey
              towards success.
            </li>
          </ul>
        </p>
        <div className="tc">
          <h2>
            Ready to make an impact? Reach out to us and let's discuss how we
            can collaborate to transform lives and create opportunities for
            those who need it most. Thank you for your support and commitment to
            positive change.
          </h2>

          <CtaLink href="https://airtable.com/appHQ4afO15UK9DwN/shrrUxg9WZaBh2dqf">
            Contact Us
          </CtaLink>
        </div>
        <section>
          <h2>Our Community Partners</h2>
          <PartnersModule />
        </section>
      </section>
    </Layout>
  );
};

export default PartnersPage;
