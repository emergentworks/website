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
);

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
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
      )}
      <li className={styles.item}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/programs" className={styles.link}>
          Programs
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/for-clients" className={styles.link}>
          For Clients
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/donate" className={styles.link}>
          Donate
        </Link>
      </li>
      {showHomeEmail && (
        <li className={styles.item}>
          { getEmailLink() }
        </li>
      )}
    </ul>
    {navVisibility ?
      (
        <section className={styles.mobileOnly}>
            <div className={styles.horizontalRule} />
            <div className={styles.contact}>
              { getEmailLink() }
              <SocialLinks className={styles.socialLinks} />
            </div>
        </section>
      ): null}
  </nav>
)

Nav.propTypes = {
  className: PropTypes.string,
}
