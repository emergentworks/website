import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import styles from './CtaLink.module.scss';

const CtaLink = ({ children, to, href }) => {
  if (to !== undefined) {
    <Link className={cx(styles.root)} to={to}>
      {children}
    </Link>;
  }

  return (
    <a className={cx(styles.root)} href={href}>
      {children}
    </a>
  );
};

CtaLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default CtaLink;
