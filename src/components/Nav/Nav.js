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
          to="/for-clients"
          className={styles.link}
          activeClassName={styles.isActive}
        >
          For Clients
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
      <li className={styles.item}>
        <Link
          to="/news"
          className={styles.link}
          activeClassName={styles.isActive}
          partiallyActive
        >
          News
        </Link>
      </li>
      {showHomeEmail && <li className={styles.item}>{getEmailLink()}</li>}
    </ul>
    {navVisibility && (
      <section className={styles.mobileOnly}>
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
  navVisibility: PropTypes.func,
  showHomeLink: PropTypes.bool,
  showHomeEmail: PropTypes.bool,
}
