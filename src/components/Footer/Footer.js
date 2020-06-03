import React from 'react'
import cx from 'classnames'

import twitterLogo from '../../_assets/images/icon-twitter.svg'
import instagramLogo from '../../_assets/images/icon-instagram.svg'

import styles from './Footer.module.scss'

export const Footer = () => {
  const getYear = new Date().getFullYear()

  return (
    <footer className={cx(styles.root, 'content')}>
      <div className={styles.container}>Footer</div>
    </footer>
  )
}
