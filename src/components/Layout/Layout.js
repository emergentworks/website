import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.scss';
import '_assets/css/style.scss';

export const Layout = ({ children, banner }) => {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <div
      className={cx(styles.root, styles.pageContainer, {
        [styles.navActive]: navVisibility,
      })}
    >
      {banner && <div className={cx(styles.banner)}>{banner}</div>}
      <Header
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
      />
      <main className={cx(styles.root)}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.object,
};
