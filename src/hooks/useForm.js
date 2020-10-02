import { useState, useEffect } from 'react'

export default function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const [isSuccuss, setSuccuss] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors, isSubmitting, values.email])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    handleBlur,
    handleOnSubmit,
    handleChange,
    errors,
    values,
    isSubmitting,
    setValues,
    isSuccuss,
    setSuccuss,
    setErrors,
    setSubmitting,
  }
}
