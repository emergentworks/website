import React, { useState } from 'react'
import FormField from 'components/FormField'
import Button from 'components/Button'
import cx from 'classnames'
import styles from './SubscribeForm.module.scss'

export const SubscribeForm = () => {
  const [email, setEmail] = useState('')

  return (
    <form
      className={cx(styles.root)}
      method="post"
      action="https://codecooperative.us10.list-manage.com/subscribe/post?u=a36b0a9269c2cba8834a091c4&amp;id=4a979c4bc3"
      noValidate
    >
      <div className={cx(styles.inputWrapper)}>
        <FormField
          value={email}
          label="Your email here"
          onChange={setEmail}
          name="EMAIL"
        />
      </div>
      <Button labelClassName={cx(styles.submitButton)} name="Subscribe" submit>
        Stay updated
      </Button>
    </form>
  )
}
