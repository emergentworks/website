import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { generateUUID } from '../../helpers/dom';
import styles from './Accordion.module.scss';

export const Accordion = ({ label, content }) => {
  const [uuid] = useState(generateUUID());
  const [expanded, setExpanded] = useState(false);

  const controlId = `${uuid}-control`;

  return (
    <div className={cx(styles.root)}>
      <h3 className={styles.accordionHeader}>
        <button
          type="button"
          aria-expanded={expanded}
          className={styles.accordionControl}
          aria-controls={uuid}
          id={controlId}
          onClick={() => setExpanded(!expanded)}
        >
          {label}
        </button>
      </h3>
      <p
        id={uuid}
        role="region"
        aria-labelledby={controlId}
        className={styles.accordionContents}
        hidden={!expanded}
      >
        {content}
      </p>
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string,
  contents: PropTypes.string,
};
