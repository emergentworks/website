import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './ImgCaption.module.scss';

export const ImgCaption = ({ fluid, alt, caption }) => (
  <figure className={cx(styles.root)}>
    <Img className={cx(styles.img)} fluid={fluid} alt={alt} />
    <figcaption className={cx(styles.caption)}>{caption}</figcaption>
  </figure>
);

ImgCaption.propTypes = {
  alt: PropTypes.string.isRequired,
  fluid: PropTypes.object,
  caption: PropTypes.string,
};
