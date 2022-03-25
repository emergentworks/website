import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';
import styles from './ImageGrid.module.scss';

export const ImageGrid = () => {
  return (
    <div className={cx(styles.gridContainer)}>
      <StaticImage
        src="../../_assets/images/home-page-grid/grant-announcement.png"
        alt="Emergent Works has received a $1,000,000 grant from the foundation of Twitter and Square Jack Dorsey's #StartSmall Fund"
        className={styles.gridItem1}
      />
      <StaticImage
        src="../../_assets/images/home-page-grid/showcase.jpg"
        alt="Two people of color clapping hands at the Emergent Works Showcase"
        className={styles.gridItem2}
      />
      <StaticImage
        src="../../_assets/images/home-page-grid/casual.jpg"
        alt="Army and a person wearing an EmergentWorks shirt are hanging out outside"
        className={styles.gridItem3}
      />
      <StaticImage
        src="../../_assets/images/home-page-grid/showcase2.jpg"
        alt="Two women look over a crowded room at the Emergent Works Showcase"
        className={styles.gridItem4}
      />
    </div>
  );
};
