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
    <div className={cx(styles.root, className)}>
      <Image
        src={image}
        alt={title || "Hero Background"}
        fill
        style={{
          gridArea: "1/1",
          objectFit: "cover", // Replicates background-size: cover
        }}
        priority // Good to add if the Hero is the first major image on the page
      />
      <div
        style={{ gridArea: "1/1", position: "relative" }}
        className={cx(styles.imageOverlay)}
      >
        {children ?? (title && <PageTitle title={title} />)}
      </div>
    </div>
  );
}

export default Hero;
