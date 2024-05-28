import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SocialLinks from 'components/SocialLinks';

import styles from './Nav.module.scss';

const PAGES = ['About', 'Programs', 'Team', 'Partners'];

export const Nav = ({ navVisibility, banner, className, ...rest }) => (
  <nav
    className={cx(styles.root, className, {
      [styles.isActive]: navVisibility,
    })}
    {...rest}
  >
    <ul className={styles.group}>
      {PAGES.map((page) => (
        <li key={page} className={styles.item}>
          <Link
            to={`/${page.toLowerCase()}`}
            className="secondary"
            activeClassName={styles.isActive}
          >
            {page}
          </Link>
        </li>
      ))}
      <li className={styles.item}>
        <a href="https://medium.com/@emergentworks" className="secondary">
          Blog
        </a>
      </li>
      <li className={styles.item}>
        <Link
          to="/donate"
          className={styles.donate}
          activeClassName={styles.isActive}
        >
          Donate
        </Link>
      </li>
    </ul>
    {navVisibility && (
      <section
        className={cx(styles.mobileOnly, {
          [styles.bannerVisible]: banner,
        })}
      >
        <div className={styles.horizontalRule} />
        <div className={styles.contact}>
          <SocialLinks className={styles.socialLinks} />
        </div>
      </section>
    )}
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  navVisibility: PropTypes.bool,
  banner: PropTypes.string,
};
