import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from '../../pages/partners.module.scss';

export const PartnersModule = ({ heading, subheading, isLimited = false }) => {
  const allPartnersData = useStaticQuery(graphql`
    query AllPartnersQuery {
      partners: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          name
          id
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const allPartners = allPartnersData.partners.nodes.sort(
    (a, b) => a.name > b.name
  );
  const selectPartners = allPartners.slice(0, 6);
  const images = isLimited ? selectPartners : allPartners;

  return (
    <>
      {heading}
      {subheading}
      <div className={styles.logoWrapper}>
        <div className={styles.logoGroup}>
          {images.map((logo) => (
            <div key={logo.id} className={styles.logoItem}>
              <GatsbyImage
                image={logo.childImageSharp.gatsbyImageData}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

PartnersModule.propTypes = {
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.node.isRequired,
  isLimited: PropTypes.bool,
};
