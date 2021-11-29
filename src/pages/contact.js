import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './contact.module.scss';

const ContactPage = () => (
  <Layout className={styles.page}>
    <SEO title="Contact" />
    <section className={cx(styles.root, 'content')}>
      <div className={styles.container}>Contact</div>
    </section>
  </Layout>
);

export default ContactPage;
