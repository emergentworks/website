import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './ImageGrid.module.scss';

export const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    {
      ImgGrid1: file(
        relativePath: { eq: "home-page-grid/grant-announcement.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ImgGrid2: file(relativePath: { eq: "home-page-grid/showcase.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ImgGrid3: file(relativePath: { eq: "home-page-grid/casual.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ImgGrid4: file(relativePath: { eq: "home-page-grid/showcase2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div className={cx(styles.gridContainer)}>
      <GatsbyImage
        image={data.ImgGrid1.childImageSharp.gatsbyImageData}
        alt="Emergent Works has received a $1,000,000 grant from the foundation of Twitter and Square Jack Dorsey's #StartSmall Fund"
        className={styles.gridItem1}
      />
      <GatsbyImage
        image={data.ImgGrid2.childImageSharp.gatsbyImageData}
        alt="Two people of color clapping hands at the Emergent Works Showcase"
        className={styles.gridItem2}
      />
      <GatsbyImage
        image={data.ImgGrid3.childImageSharp.gatsbyImageData}
        alt="Army and a person wearing an EmergentWorks shirt are hanging out outside"
        className={styles.gridItem3}
      />
      <GatsbyImage
        image={data.ImgGrid4.childImageSharp.gatsbyImageData}
        alt="Two women look over a crowded room at the Emergent Works Showcase"
        className={styles.gridItem4}
      />
    </div>
  );
};
