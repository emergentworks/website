import React from "react";
import cx from "classnames";

import Nav from "components/Nav";
import SocialLinks from "components/SocialLinks";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className={cx(styles.root, "page-content")}>
      <div className={cx(styles.container)}>
        <div className={styles.linkGroup}>
          <div className={styles.navGroup}>
            <Nav className={styles.nav} />
          </div>
          <div className={styles.socialGroup}>
            <SocialLinks />
          </div>
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

export default Footer;
