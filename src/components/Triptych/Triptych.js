import React from "react"
import PropTypes from "prop-types"
import "./triptych.scss"

export const Triptych = props => (
  <section className="pageBanner">
    <h2 className="triptych-title content">
      Partnering industry veterans with formerly incarcerated technologists.
    </h2>

    <div className="pageBanner-inner content triptych">{props.children}</div>
  </section>
)

export const TriptychItem = props => (
  <div className="triptych-item">
    <img className="triptych-icon" src={props.url} />
    <div classname="blurb">{props.children}</div>
  </div>
)
