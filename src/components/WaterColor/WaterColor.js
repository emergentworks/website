import React from 'react'
import PropTypes from 'prop-types'

import WebPackage from '_assets/images/sketch-webpage.png'
import WaterColorPurple from '_assets/images/waterColor-purple.png'
import WaterColorGreen from '_assets/images/waterColor-green.png'

import styles from './WaterColor.module.scss'

export const WaterColor = ({ alt, img = WebPackage, color = 'purple' }) => {
  const WATER_COLOR = {
    purple: WaterColorPurple,
    green: WaterColorGreen,
  }

  return (
    <div className={styles.root}>
      <img className={styles.waterColor} src={WATER_COLOR[color]} alt="" />
      <img className={styles.img} src={img} alt={alt} />
    </div>
  )
}

WaterColor.propTypes = {
  alt: PropTypes.string.isRequired,
  color: PropTypes.node,
  img: PropTypes.node,
}
