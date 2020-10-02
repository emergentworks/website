import React from 'react'
import cx from 'classnames'
import axios from 'axios'
import { format } from 'date-fns'

import { useForm } from 'hooks'
import { validateAuth } from 'utils'

import FormField from 'components/FormField'
import Button from 'components/Button'
import { BiCheckCircle } from 'react-icons/bi'

import styles from './LeadForm.module.scss'

export const LeadForm = () => {
  const INITIAL_STATE = {
    email: '',
    name: '',
    company: '',
    about: '',
  }

  const {
    handleBlur,
    handleChange,
    errors,
    values,
    isSubmitting,
    setValues,
    isSuccuss,
    setSuccuss,
    setSubmitting,
  } = useForm(INITIAL_STATE, validateAuth)

  const handleOnSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)

    const currentDate = new Date()
    values.timestamp = format(currentDate, 'MM/dd/yyyy')

    try {
      await axios.post('/api/leads', values)
      await console.log('Message has been sent')
      await setSubmitting(false)
      setValues(INITIAL_STATE)
      setSuccuss(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={cx(styles.root)}>
      {isSuccuss ? (
        <div className={cx(styles.successMessage, 'content-max-width')}>
          <BiCheckCircle className={styles.successIcon} />
          <h2 className={styles.successContent}>
            Form has been submitted! Some one from our team will reach out to
            you shortly.
          </h2>
        </div>
      ) : (
        <form className={cx(styles.form)} onSubmit={handleOnSubmit}>
          <h1 className={cx(styles.title, 'content-max-width')}>Let's chat!</h1>
          <div className={cx(styles.inputWrapper)}>
            <FormField
              value={values.company}
              label="YOUR COMPANY"
              onChange={handleChange}
              name="company"
              className={styles.textField}
            />
            <FormField
              value={values.name}
              label="YOUR NAME"
              onChange={handleChange}
              name="name"
              className={styles.textField}
            />
            <FormField
              value={values.email}
              label="YOUR EMAIL"
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              errorMessage={errors.email}
              required
              className={styles.textField}
            />
            <FormField
              value={values.about}
              label="HOW CAN WE HELP?"
              onChange={handleChange}
              name="about"
              required
              type="textarea"
              rows="40"
              cols="50"
              className={styles.textField}
            />
          </div>
          <Button
            disabled={isSubmitting}
            labelClassName={cx(styles.submitButton)}
            submit
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  )
}
