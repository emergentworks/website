import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WebPage from '_assets/images/sketch-webpage.png';
import WaterColorPurple from '_assets/images/waterColor-purple.png';
import WaterColorGreen from '_assets/images/waterColor-green.png';

import styles from './WaterColor.module.scss';

export const WaterColor = ({ alt = '', img = WebPage, color = 'purple' }) => {
  const WATER_COLOR = {
    purple: WaterColorPurple,
    green: WaterColorGreen,
  };

  return (
    <div className={cx(styles.root, 'm--auto')}>
      <img className={styles.waterColor} src={WATER_COLOR[color]} alt="" />
      <img className={styles.img} src={img} alt={alt} />
    </div>
  );
};

WaterColor.propTypes = {
  // Not required for decorative imagery.
  // See: https://www.w3.org/WAI/tutorials/images/decorative/
  alt: PropTypes.string,
  color: PropTypes.node,
  img: PropTypes.node,
};
