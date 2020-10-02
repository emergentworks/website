import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { BiErrorCircle } from 'react-icons/bi'

import { generateUUID } from '../../helpers/dom'
import styles from './FormField.module.scss'

export const FormField = React.forwardRef(function FormField(
  {
    value = '',
    label = '',
    type = 'text',
    errorMessage = '',
    className,
    onChange,
    ...rest
  },
  forwardRef
) {
  const [uuid] = useState(generateUUID())

  return (
    <div htmlFor={uuid} className={cx(styles.root, className)}>
      {type === 'textarea' ? (
        <textarea
          className={cx(styles.input)}
          type={type}
          value={value}
          id={uuid}
          ref={forwardRef}
          onChange={onChange}
          placeholder={label}
          aria-label={label}
          {...rest}
        />
      ) : (
        <input
          className={cx(styles.input)}
          type={type}
          value={value}
          id={uuid}
          ref={forwardRef}
          onChange={onChange}
          placeholder={label}
          aria-label={label}
          {...rest}
        />
      )}

      {errorMessage && (
        <div className={styles.errorContainer}>
          <BiErrorCircle className={styles.errorIcon} />
          <span className={styles.errorMessage}>{errorMessage}</span>
        </div>
      )}
    </div>
  )
})

FormField.propTypes = {
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf('text', 'textarea'),
  onChange: PropTypes.func,
}
