import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/Icon';

import styles from './SocialLinks.module.scss';

export const SocialLinks = ({ className, ...rest }) => (
  <div className={cx(styles.root, className)} {...rest}>
    <a
      href="https://www.instagram.com/emergentworks_"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <Icon
        className={styles.icon}
        type="instagram"
        title="Follow Emergent Works on Instagram"
      />
    </a>
    <a
      href="https://twitter.com/emergentworks_"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <Icon
        className={styles.icon}
        type="twitter"
        title="Follow Emergent Works on Instagram"
      />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};
