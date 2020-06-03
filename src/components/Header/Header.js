import React, { useState } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import logo from '../../_assets/images/logo--horizontal.svg'

import styles from './Header.module.scss'

export const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false)

  const activeMenu = () => {
    setNavVisibility(!navVisibility)
  }

  return (
    <header className={cx(styles.root, 'content')}>
      <div className={styles.container}>Header</div>
    </header>
  )
}
