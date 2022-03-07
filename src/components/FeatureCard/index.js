import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './FeatureCard.module.scss';

export const FeatureCard = ({
  children,
  heading = '',
  bannerCopy = '',
  isFeatured,
}) => {
  const cardSize = isFeatured ? 'large' : 'base';
  return (
    <div className={cx(styles.card, styles[cardSize])}>
      {bannerCopy && <span className={cx(styles.featured)}>{bannerCopy}</span>}
      {heading && <h2>{heading}</h2>}
      {children}
    </div>
  );
};

FeatureCard.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  bannerCopy: PropTypes.string,
  isFeatured: PropTypes.bool,
};
