import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'

import styles from './SocialLinks.module.scss'

export const SocialLinks = ({ className, ...rest }) => (
  <div className={cx(styles.root, className)} {...rest}>
    <Link to="/" className={styles.link}>
      <Icon
        className={styles.icon}
        type="instagram"
        title="Follow Emergent Works on Instagram"
      />
    </Link>
    <Link to="/" className={styles.link}>
      <Icon
        className={styles.icon}
        type="twitter"
        alt="Follow Emergent Works on Twitter"
      />
    </Link>
  </div>
)

SocialLinks.propTypes = {
  className: PropTypes.string,
}
