import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import Nav from 'components/Nav';
import logo from '../../_assets/images/logo--horizontal.png';

import styles from './Header.module.scss';

export const Header = ({ navVisibility, setNavVisibility, banner }) => {
  const activeMenu = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header className={cx(styles.root, 'content')}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <span className={styles.logoWrapper}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="emergent works" />
            </Link>
          </span>
        </div>
        <div className={cx(styles.navGroup)}>
          <button
            type="button"
            className={cx(styles.navButton, {
              [styles.isActive]: navVisibility,
            })}
            onClick={() => activeMenu()}
          >
            <div />
          </button>
          <Nav
            className={cx(styles.nav, {
              [styles.bannerActive]: banner,
            })}
            navVisibility={navVisibility}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  navVisibility: PropTypes.bool,
  banner: PropTypes.object,
  setNavVisibility: PropTypes.func,
};
