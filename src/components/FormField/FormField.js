import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { generateUUID } from '../../helpers/form'
import styles from './FormField.module.scss'

export const INPUT_SIZES = {
  SMALL: styles.smallField,
  MEDIUM: styles.mediumField,
  LARGE: styles.largeField,
}

export const FormField = ({
  value = '',
  label = '',
  type = 'text',
  size = INPUT_SIZES.LARGE,
  onInput = () => {},
}) => {
  const [uuid] = useState(generateUUID())
  const textDescLocationClass = value ? styles.textHasValue : ''

  return (
    <label htmlFor={uuid} className={cx(styles.root, size)}>
      <input
        className={cx(styles.input)}
        type={type}
        value={value}
        id={uuid}
        onInput={e => onInput(e.target.value)}
      ></input>
      <span className={cx(styles.text, textDescLocationClass)}>{label}</span>
    </label>
  )
}

FormField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onInput: PropTypes.func,
}
