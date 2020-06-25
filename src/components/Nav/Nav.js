import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Nav.module.scss'

export const Nav = ({
  navVisibility,
  showHomeLink,
  showHomeEmail,
  className,
  ...rest
}) => {
  let getYear

  return (
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
          <Link to="/about" className={styles.link}>
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
            <a
              href="mailto:hello@emergentworks.org?subject=[Action] Subject"
              className={styles.link}
            >
              hello@emergentworks.org
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}
