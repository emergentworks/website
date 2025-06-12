import React from "react";
import cx from "classnames";

import styles from "./Icon.module.scss";
import { iconList } from "./iconList";

type IconType = keyof typeof iconList;

type IconProps = {
  className?: string;
  type: IconType;
  title?: string;
};

export function Icon({ type, title, className, ...rest }: IconProps) {
  const isArrowRight = type === "arrowRight";
  const height = isArrowRight ? 15 : 24;

  return (
    <svg
      width="24"
      height={height}
      viewBox={`0 0 24 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(styles.root, className)}
      {...rest}
    >
      {title && <title>{title}</title>}
      <g clipPath="url(#clip0)">
        <path className={cx(styles.path)} d={iconList[type]} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
