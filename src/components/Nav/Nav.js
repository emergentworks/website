import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialLinks from 'components/SocialLinks'

import styles from './Nav.module.scss'

const getEmailLink = () => (
  <a
    href="mailto:hello@emergentworks.org?subject=[Action] Subject"
    className={cx(styles.link, styles.emailLink)}
  >
    hello@emergentworks.org
  </a>
)

export const Nav = ({
  navVisibility,
  banner,
  showHomeLink,
  showHomeEmail,
  className,
  ...rest
}) => (
  <nav
    className={cx(styles.root, className, {
      [styles.isActive]: navVisibility,
    })}
    {...rest}
  >
    <ul className={styles.group}>
      {showHomeLink && (
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            activeClassName={styles.isActive}
          >
            Home
          </Link>
        </li>
      )}
      <li className={styles.item}>
        <Link
          to="/about"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          About
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/programs"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          Programs
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/agency"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          Agency
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/team"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          Team
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/partners"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          Partners
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/donate"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          Donate
        </Link>
      </li>
      {showHomeEmail && <li className={styles.item}>{getEmailLink()}</li>}
    </ul>
    {navVisibility && (
      <section
        className={cx(styles.mobileOnly, {
          [styles.bannerVisible]: banner,
        })}
      >
        <div className={styles.horizontalRule} />
        <div className={styles.contact}>
          {getEmailLink()}
          <SocialLinks className={styles.socialLinks} />
        </div>
      </section>
    )}
  </nav>
)

Nav.propTypes = {
  className: PropTypes.string,
  navVisibility: PropTypes.bool,
  showHomeLink: PropTypes.bool,
  showHomeEmail: PropTypes.bool,
  banner: PropTypes.string,
}
