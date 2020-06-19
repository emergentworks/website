import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'
import twitterLogo from '../../_assets/images/icon-twitter.svg'
import instagramLogo from '../../_assets/images/icon-instagram.svg'

import styles from './SocialLinks.module.scss'

export const SocialLinks = ({ className, ...rest }) => {
  const getYear = new Date().getFullYear()

  return (
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
}

SocialLinks.propTypes = {
  className: PropTypes.string,
}
