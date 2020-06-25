import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import Icon from 'components/Icon'

import styles from './Button.module.scss'

export const Button = ({
  children,
  className,
  labelClassName,
  to,
  onClick,
  submit = false,
  type = 'primary',
  ...rest
}) => {
  if (to && !onClick) {
    return (
      <Link
        className={cx(styles.root, className, { [styles[type]]: type })}
        to={to}
        {...rest}
      >
        <span className={cx(styles.labelGroup, labelClassName)}>
          {children}
        </span>
        <span className={styles.iconGroup}>
          <Icon type="arrowRight" />
        </span>
      </Link>
    )
  }
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={submit ? 'submit' : 'button'}
      className={cx(styles.root, className, { [styles[type]]: type })}
      {...rest}
      onClick={onClick}
    >
      <span className={cx(styles.labelGroup, labelClassName)}>{children}</span>
      <span className={styles.iconGroup}>
        <Icon type="arrowRight" />
      </span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.oneOf(['primary']),
  to: PropTypes.string,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
}
