import React from 'react';

import Nav from 'components/Nav';
import SocialLinks from 'components/SocialLinks';
import SubscribeForm from 'components/SubscribeForm';

import styles from './Footer.module.scss';

export const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.elements}>
        <SubscribeForm />
        <div className={styles.linkGroup}>
          <Nav className={styles.nav} showHomeLink showHomeEmail />
          <SocialLinks />
        </div>
        <p className={styles.description}>
          Emergent Works is a fiscally sponsored program of Prime Produce
          Limited. Prime Produce Limited is a registered 501(c)(3) corporation,
          and all donations are tax deductible to the extent permitted by law.
        </p>

        <p className={styles.description}>© {getYear} Emergent Works</p>
      </div>
    </footer>
  );
};
