import React, { useState } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import Nav from 'components/Nav'
import logo from '../../_assets/images/logo--horizontal.svg'

import styles from './Header.module.scss'

export const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false)

  const activeMenu = () => {
    setNavVisibility(!navVisibility)
  }

  return (
    <header className={cx(styles.root, 'content')}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <Link to="/" class={styles.logoWrapper}>
            <img className={styles.logo} src={logo} alt="emergent works" />
          </Link>
        </div>
        <div className={styles.navGroup}>
          <button
            type="button"
            className={cx(styles.navButton, {
              [styles.isActive]: navVisibility,
            })}
            onClick={() => activeMenu()}
          >
            <div></div>
          </button>
          <Nav className={styles.nav} navVisibility={navVisibility} />
        </div>
      </div>
    </header>
  )
}
