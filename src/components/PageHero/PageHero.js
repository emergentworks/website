import React from 'react'
import './page-hero.scss'

export const PageHero = () => {
  const getYear = new Date().getFullYear()

  return (
    <section className="pageHero pageHero--contentRight">
      <div className="pageHero-inner content">
        <div className="pageHero-contentGroup">
          <h1 className="pageHero-title">Who we are</h1>
          <p className="pageHero-content">
            The Code Cooperative is a community of people who learn, use, and
            build technology to create life changing possibilities for
            individuals and communities impacted by incarceration.
          </p>
        </div>
        <div className="pageHero-imgGroup">
          <img
            className="pageHero-img"
            src={HeroImg}
            alt="We are the code coop"
          />
        </div>
      </div>
    </section>
  )
}
