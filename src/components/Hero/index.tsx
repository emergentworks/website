import React from "react";
import cx from "classnames";
import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";

const PageTitle = ({ title }: { title: string }) => (
  <h1 className={cx(styles.heroTitle, "cornerBordersHero")}>{title}</h1>
);

type HeroProps = {
  image: StaticImageData | string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Hero({ title, image, children, className }: HeroProps) {
  return (
    <div className={cx(styles.root, className)} style={{ display: "grid" }}>
      {/* This new wrapper div mimics the old GatsbyImage wrapper */}
      <div
        style={{
          gridArea: "1/1",
          position: "relative", // Needed for the child Image with "fill"
          height: "50vh",
          maxHeight: "450px",
        }}
      >
        <Image
          src={image}
          alt={title || "Hero Background"}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "left 27%", // Keep this to focus the image correctly
          }}
          priority
        />
      </div>

      {/* This is the text overlay */}
      <div
        className={cx(styles.imageOverlay)}
        style={{ gridArea: "1/1", position: "relative" }}
      >
        {children ?? (title && <PageTitle title={title} />)}
      </div>
    </div>
  );
}

export default Hero;
