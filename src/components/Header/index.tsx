"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import Nav from "components/Nav"; // Assuming Nav is also converted

import styles from "./Header.module.scss";

type HeaderProps = {
  navVisibility: boolean;
  setNavVisibility: (visible: boolean) => void;
  banner?: React.ReactNode;
};

export const Header = ({
  navVisibility,
  setNavVisibility,
  banner,
}: HeaderProps) => {
  const activeMenu = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header className={cx(styles.root)}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <span className={styles.logoWrapper}>
            <Link href="/">
              <Image
                className={styles.logo}
                src="/images/logo--horizontal.png"
                alt="emergent works"
                width={194}
                height={34.55}
                priority // Load the logo quickly
              />
            </Link>
          </span>
        </div>
        <div className={cx(styles.navGroup)}>
          <button
            type="button"
            className={cx(styles.navButton, {
              [styles.isActive]: navVisibility,
            })}
            onClick={activeMenu}
          >
            <div />
          </button>
          <Nav
            className={cx(styles.nav, {
              [styles.bannerActive]: !!banner,
            })}
            navVisibility={navVisibility}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
