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
          Emergent Works is a registered 501(c)(3) corporation. All donations
          are tax deductible to the extent permitted by law. EIN: 85-1197743
        </p>
        <p className={styles.description}>© {getYear} Emergent Works</p>
      </div>
    </footer>
  );
};

export default Footer;
