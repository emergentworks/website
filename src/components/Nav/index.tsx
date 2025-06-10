"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import SocialLinks from "components/SocialLinks"; // Assumes SocialLinks is also migrated

import styles from "./Nav.module.scss";

const PAGES = ["About", "Programs", "Team", "Partners"];

type NavProps = {
  navVisibility?: boolean;
  banner?: boolean;
  className?: string;
};

export function Nav({ navVisibility, banner, className, ...rest }: NavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cx(styles.root, className, {
        [styles.isActive]: navVisibility,
      })}
      {...rest}
    >
      <ul className={styles.group}>
        {PAGES.map((page) => {
          const href = `/${page.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <li key={page} className={styles.item}>
              <Link
                href={href}
                className={cx("secondary", { [styles.isActive]: isActive })}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li className={styles.item}>
          <a
            href="https://emergentworks.super.site/"
            className="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resources
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://medium.com/@emergentworks"
            className="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li className={styles.item}>
          <Link
            href="/donate"
            className={cx(styles.donate, {
              [styles.isActive]: pathname === "/donate",
            })}
          >
            Donate
          </Link>
        </li>
      </ul>
      {navVisibility && (
        <section
          className={cx(styles.mobileOnly, {
            [styles.bannerVisible]: !!banner,
          })}
        >
          <div className={styles.horizontalRule} />
          {/* <div className={styles.contact}>
            <SocialLinks className={styles.socialLinks} />
          </div> */}
        </section>
      )}
    </nav>
  );
}

export default Nav;
