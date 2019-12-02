import React from 'react'
import PropTypes from 'prop-types'
import './page-hero.scss'

export const HeroContent = ({ children }) => {
  const getYear = new Date().getFullYear()

  return <p className="pageHero-content">{children}</p>
}

export const HeroTitle = ({ children }) => {
  const getYear = new Date().getFullYear()

  return <h1 className="pageHero-title">{children}</h1>
}

export const Hero = ({ children, contentPlacement }) => {
  const getYear = new Date().getFullYear()

  return (
    <section
      className={`pageHero ${
        contentPlacement === 'right' ? 'pageHero--contentRight' : ''
      }`}
    >
      <div className="pageHero-inner content">{children}</div>
    </section>
  )
}

HeroContent.propTypes = {
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
