/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Header from '../Header'
import Footer from '../Footer'

import styles from './Layout.module.scss'
import '_assets/css/style.scss'

export const Layout = ({ children, className, banner }) => {
  const [navVisibility, setNavVisibility] = useState(false)

  return (
    <div
      className={cx(styles.root, {
        [styles.navActive]: navVisibility,
      })}
    >
      {banner && <div className={cx(styles.banner)}>{banner}</div>}
      <Header
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
        banner={banner}
      />
      <main className={cx(styles.root, { [styles[className]]: className })}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  banner: PropTypes.object,
}
