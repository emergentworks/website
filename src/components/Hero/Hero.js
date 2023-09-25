import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import styles from './hero.module.scss';

const PageTitle = ({ title }) => (
  <h1 className={cx(styles.heroTitle, 'cornerBordersHero')}>{title}</h1>
);

export const Hero = ({ title, image, children }) => {
  return (
    <div style={{ display: 'grid' }}>
      <GatsbyImage
        image={image}
        alt=""
        style={{
          gridArea: '1/1',
          height: '50vh',
        }}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'flex-start',
          alignItems: 'flex-end',
          display: 'grid',
          textShadow: 'var(--gray-600) 1px 0 30px',
          color: 'var(--white-500)',
        }}
      >
        {children ?? <PageTitle title={title} />}
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
