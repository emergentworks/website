import React from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./CtaLink.module.scss";

type CtaLinkProps = {
  children: React.ReactNode;
  to?: string; // For internal Next.js routes
  href?: string; // For external links
};

const CtaLink: React.FC<CtaLinkProps> = ({ children, to, href }) => {
  // Internal links take precedence.
  if (to) {
    return (
      <Link href={to} className={cx(styles.root)}>
        {children}
      </Link>
    );
  }

  // Fallback to a standard anchor tag for external links.
  if (href) {
    return (
      <a
        href={href}
        className={cx(styles.root)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Render a non-interactive element if no link is provided.
  return <span className={cx(styles.root)}>{children}</span>;
};

export default CtaLink;
