import React from 'react';
import Img from 'gatsby-image';
import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './ImageGrid.module.scss';

export const ImageGrid = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      ImgGrid1: file(relativePath: { eq: "imageGrid1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImgGrid2: file(relativePath: { eq: "imageGrid2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImgGrid3: file(relativePath: { eq: "imageGrid3.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={cx(styles.gridContainer, className)}>
      <Img
        fluid={data.ImgGrid1.childImageSharp.fluid}
        alt="TODO"
        className={styles.gridItem1}
      />
      <Img
        fluid={data.ImgGrid2.childImageSharp.fluid}
        alt="TODO"
        className={styles.gridItem2}
      />
      <Img
        fluid={data.ImgGrid3.childImageSharp.fluid}
        alt="TODO"
        className={styles.gridItem3}
      />
    </div>
  );
};
