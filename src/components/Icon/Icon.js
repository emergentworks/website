import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./Icon.module.scss";

import { iconList } from "./iconList";

const getIconNames = Object.keys(iconList);

export const Icon = ({ type, title, className, ...rest }) => {
  const arrowRight = type === "arrowRight" ? 15 : 24;

  return (
    <svg
      width="24"
      height={arrowRight}
      viewBox={`0 0 24 ${arrowRight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(styles.root, className)}
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
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(getIconNames),
  title: PropTypes.string,
};
