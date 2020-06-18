import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { generateUUID } from '../../helpers/dom'
import styles from './FormField.module.scss'

export const FormField = ({
  value = '',
  label = '',
  type = 'text',
  onInput = () => {},
}) => {
  const [uuid] = useState(generateUUID())
  const textDescLocationClass = value ? styles.textHasValue : ''

  return (
    <label htmlFor={uuid} className={cx(styles.root)}>
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
  onInput: PropTypes.func,
}
