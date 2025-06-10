"use client";

import React, { useState } from "react";
import cx from "classnames";

import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
  banner?: React.ReactNode;
};

export const Layout = ({ children, className, banner }: LayoutProps) => {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <>
      <Header
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
        banner={banner}
      />
      <div
        className={cx(styles.root, {
          [styles.navActive]: navVisibility,
        })}
      >
        {banner && <div className={cx(styles.banner)}>{banner}</div>}

        <main className={cx({ [styles[className ?? ""]]: className })}>
          <div className={styles.container}>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
