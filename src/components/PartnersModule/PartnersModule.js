import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from '../../pages/partners.module.scss';

export const PartnersModule = ({ heading, subheading }) => {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      sponsors: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
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

  const sponsors = data.sponsors.nodes;
  sponsors.sort((a, b) => a.name > b.name);

  return (
    <>
      {heading}
      {subheading}
      <div>
        <div className={styles.logoGroup}>
          {sponsors.map((logo) => (
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
};
