import React, { useState } from 'react';
import FormField from 'components/FormField';
import cx from 'classnames';
import styles from './SubscribeForm.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import Icon from '../Icon';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

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
          label="Subscribe to our updates: "
          placeholder="you@email.com"
          onChange={(e) => setEmail(e.target.value)}
          name="EMAIL"
        />
      </div>
      <button
        type="submit"
        className={cx(styles.submitButton)}
        name="Subscribe"
      >
        <span className={buttonStyles.submitContent}>
          <Icon type="arrowRight">GO</Icon>
        </span>
      </button>
    </form>
  );
};
