import React from 'react';
import cx from 'classnames';

import SEO from '../components/seo';
import Layout from '../components/Layout';

import styles from './donate.module.scss';

const DoubleTheDonationPage = () => {
  return (
    <Layout className={styles.page}>
      <SEO title="Donate" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx('title', styles.pageTitle)}>
          Emergent Works interrupts the prison cycle by creating pathways into
          high-paying jobs in technology for formerly incarcerated people.
        </h1>
        <h2 className="mt--none">Support our work</h2>
        <p>
          Double or even triple your gift to Emergent Works! Make your gifts to
          Emergent Works go even further through a gift-matching program! Some
          companies will even match gifts made by retirees and spouses of
          employees. Please use the below search tool to see if your company
          will match your donation and to access the forms, guidelines, and
          instructions that you need to submit a matching gift.
        </p>
        <iframe
          title="Double the Donation"
          id="dd-form"
          src="https://doublethedonation.com/api/iframe/6SuPpk0DzYtX4xAt"
        />
        <h2 className="mt--none">Our Information</h2>
        <div>
          When submitting a matching gift through your company's portal you may
          need the following information:
          <ul className={cx(styles.info)}>
            <li>
              <span className={cx(styles.bold)}>Federal Tax EIN:</span>{' '}
              85-1197743
            </li>
            <li>
              <span className={cx(styles.bold)}>Organization Name:</span>{' '}
              Emergent Works Inc
            </li>
            <li>
              <span className={cx(styles.bold)}>Address:</span> 424 w 54th
              Street, New York, NY 10019
            </li>
            <li>
              <span className={cx(styles.bold)}>Contact info:</span>{' '}
              hello@emergentworks.org
            </li>
          </ul>
        </div>
        <p className={cx(styles.footer)}>
          <a href="https://doublethedonation.com/matching-grant-resources/matching-gift-basics/">
            Matching Gift
          </a>{' '}
          and{' '}
          <a href="https://doublethedonation.com/matching-grant-resources/volunteer-grant-basics/">
            Volunteer Grant
          </a>{' '}
          information provided by:
          <br />
          <a href="https://doublethedonation.com" id="dd-logo">
            <img
              alt="Powered by Double the Donation"
              src="https://doublethedonation.com/api/img/powered-by.png"
            />
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default DoubleTheDonationPage;
