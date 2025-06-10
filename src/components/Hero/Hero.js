import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";
import styles from "./hero.module.scss";

const PageTitle = ({ title }) => (
  <h1 className={cx(styles.heroTitle, "cornerBordersHero")}>{title}</h1>
);

export const Hero = ({ title, image, children, className }) => {
  return (
    <div
      className={`${cx(styles.root)} ${className}`}
      style={{ display: "grid" }}
    >
      <GatsbyImage
        image={image}
        alt=""
        style={{
          gridArea: "1/1",
          height: "50vh",
          maxHeight: "450px",
        }}
      />
      <div className={cx(styles.imageOverlay)}>
        {children ?? <PageTitle title={title} />}
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.object,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
