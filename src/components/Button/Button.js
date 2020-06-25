import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'

import styles from './Button.module.scss'

export const Button = ({
  children,
  className,
  labelClassName,
  type = 'primary',
  submit = false,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={submit ? 'submit' : 'button'}
    className={cx(styles.root, className, { [styles[type]]: type })}
    {...rest}
  >
    <span className={cx(styles.labelGroup, labelClassName)}>{children}</span>
    <span className={styles.iconGroup}>
      <Icon type="arrowRight" />
    </span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.oneOf(['primary']),
  submit: PropTypes.bool,
}
