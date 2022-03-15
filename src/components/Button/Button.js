import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import Icon from 'components/Icon';

import styles from './Button.module.scss';

// TODO: This is a link component and not a button. Should eventually refactor/rename.

export const Button = ({ children, to, href }) => {
  const content = () => (
    <>
      <span className={cx(styles.labelGroup)}>{children}</span>
      <span className={styles.iconGroup}>
        <Icon type="arrowRight" />
      </span>
    </>
  );

  if (to !== undefined) {
    <Link className={cx(styles.root, styles.primary)} to={to}>
      {content()}
    </Link>;
  }

  return (
    <a className={cx(styles.root, styles.primary)} href={href}>
      {content()}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};
