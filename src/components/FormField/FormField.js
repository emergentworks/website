import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BiErrorCircle } from 'react-icons/bi';

import styles from './FormField.module.scss';

export const FormField = React.forwardRef(function FormField(
  {
    value = '',
    label = '',
    id = '',
    placeholder = '',
    type = 'text',
    errorMessage = '',
    className,
    onChange,
    ...rest
  },
  forwardRef
) {
  return (
    <div htmlFor={id} className={cx(styles.root, className)}>
      {type === 'textarea' ? (
        <textarea
          className={cx(styles.input)}
          type={type}
          value={value}
          id={id}
          ref={forwardRef}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={label}
          {...rest}
        />
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            className={cx(styles.input)}
            type={type}
            value={value}
            id={id}
            ref={forwardRef}
            onChange={onChange}
            placeholder={placeholder}
            aria-label={label}
            {...rest}
          />
        </>
      )}

      {errorMessage && (
        <div className={styles.errorContainer}>
          <BiErrorCircle className={styles.errorIcon} />
          <span className={styles.errorMessage}>{errorMessage}</span>
        </div>
      )}
    </div>
  );
});

FormField.propTypes = {
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'textarea']),
  onChange: PropTypes.func,
};
