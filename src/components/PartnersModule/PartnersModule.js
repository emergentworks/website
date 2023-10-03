import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './partnersmod.module.scss';

export const PartnersModule = ({ isLimited = false }) => {
  const allPartnersData = useStaticQuery(graphql`
    query AllPartnersQuery {
      partners: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          name
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const allPartners = allPartnersData.partners.nodes.sort(
    (a, b) => a.name > b.name
  );
  const selectPartners = allPartners.filter((partner) =>
    partner.name.includes('featured_')
  );

  const images = isLimited ? selectPartners : allPartners;

  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.logoGroup)}>
        {images.map((logo) => (
          <div key={logo.id}>
            <GatsbyImage
              key={logo.id}
              image={logo.childImageSharp.gatsbyImageData}
              alt={logo.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PartnersModule.propTypes = {
  isLimited: PropTypes.bool,
};
