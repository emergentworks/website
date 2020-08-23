import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import Nav from 'components/Nav'
import logo from '../../_assets/images/logo--horizontal.svg'

import styles from './Header.module.scss'

export const Header = ({ navVisibility, setNavVisibility }) => {
  const activeMenu = () => {
    setNavVisibility(!navVisibility)
  }

  return (
    <header className={cx(styles.root, 'content')}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <Link to="/" className={styles.logoWrapper}>
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

Header.propTypes = {
  navVisibility: PropTypes.bool,
  setNavVisibility: PropTypes.func,
}
