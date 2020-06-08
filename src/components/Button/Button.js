import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'

import styles from './Button.module.scss'

export const Button = ({ children, className, type = 'primary', ...rest }) => (
  <button
    type="button"
    className={cx(styles.root, className, { [styles[type]]: type })}
    {...rest}
  >
    <span className={styles.labelGroup}>{children}</span>
    <span className={styles.iconGroup}>
      <Icon type="arrowRight" />
    </span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary']),
}
