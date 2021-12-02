import React from 'react';
import Img from 'gatsby-image';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './ImageGrid.module.scss';

export const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      ImgGrid1: file(
        relativePath: { eq: "home-page-grid/grant-announcement.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImgGrid2: file(relativePath: { eq: "home-page-grid/showcase.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImgGrid3: file(relativePath: { eq: "home-page-grid/casual.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImgGrid4: file(relativePath: { eq: "home-page-grid/showcase2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={cx(styles.gridContainer)}>
      <Img
        fluid={data.ImgGrid1.childImageSharp.fluid}
        alt="Emergent Works has received a $1,000,000 grant from the foundation of Twitter and Square Jack Dorsey's #StartSmall Fund"
        className={styles.gridItem1}
      />
      <Img
        fluid={data.ImgGrid2.childImageSharp.fluid}
        alt="Two people of color clapping hands at the Emergent Works Showcase"
        className={styles.gridItem2}
      />
      <Img
        fluid={data.ImgGrid3.childImageSharp.fluid}
        alt="Army and a person wearing an EmergentWorks shirt are hanging out outside"
        className={styles.gridItem3}
      />
      <Img
        fluid={data.ImgGrid4.childImageSharp.fluid}
        alt="Two women look over a crowded room at the Emergent Works Showcase"
        className={styles.gridItem4}
      />
    </div>
  );
};
