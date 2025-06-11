import React from "react";
import cx from "classnames";
import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";

const PageTitle = ({ title }: { title: string }) => (
  <h1 className={cx(styles.heroTitle, "cornerBordersHero")}>{title}</h1>
);

type HeroProps = {
  title?: string;
  image: StaticImageData | string;
  children?: React.ReactNode;
  className?: string;
  objectPosition?: string;
};

export function Hero({
  title,
  image,
  children,
  className,
  objectPosition = "left 25%",
}: HeroProps) {
  return (
    <div className={cx(styles.root, className)} style={{ display: "grid" }}>
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
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
            objectPosition: objectPosition,
          }}
          priority
        />
      </div>
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
