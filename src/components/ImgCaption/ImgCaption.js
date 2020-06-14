import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './ImgCaption.module.scss'

export const ImgCaption = ({ src, alt, caption }) => (
  <figure className={cx(styles.root)}>
    <img className={cx(styles.img)} src={src} alt={alt} />
    <figcaption className={cx(styles.caption)}>{caption}</figcaption>
  </figure>
)

ImgCaption.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
}
