import React from 'react'
import PropTypes from 'prop-types'
import './hero.scss'

export const HeroContent = ({ children }) => (
  <div className="hero-content">{children}</div>
)

export const HeroTitle = ({ children }) => (
  <h1 className="hero-title">{children}</h1>
)

export const HeroContentGroup = ({ children }) => (
  <div className="hero-contentGroup">{children}</div>
)

export const HeroImgGroup = ({ children }) => (
  <div className="hero-imgGroup">{children}</div>
)

export const Hero = ({ children, contentPlacement }) => (
  <section
    className={`hero ${
      contentPlacement === 'right' ? 'hero--contentRight' : ''
    }`}
  >
    <div className="hero-inner content">{children}</div>
  </section>
)

HeroContent.propTypes = {
  children: PropTypes.node.isRequired,
}

HeroContentGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

HeroImgGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

HeroTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  contentPlacement: PropTypes.oneOf(['right', 'left']),
}

Hero.defaultProps = {
  contentPlacement: 'left',
}
