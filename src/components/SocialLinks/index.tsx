import React from "react";
import cx from "classnames";

import Icon from "components/Icon";
import styles from "./SocialLinks.module.scss";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className, ...rest }: SocialLinksProps) {
  return (
    <div className={cx(styles.root, className)} {...rest}>
      <a
        href="https://www.instagram.com/emergentworks_"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="Follow Emergent Works on Instagram"
      >
        <Icon className={styles.icon} type="instagram" />
      </a>
      <a
        href="https://twitter.com/emergentworks_"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="Follow Emergent Works on Twitter"
      >
        <Icon className={styles.icon} type="twitter" />
      </a>
    </div>
  );
}

export default SocialLinks;
