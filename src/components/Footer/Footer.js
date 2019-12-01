import React from 'react'
import twitterLogo from '../../_assets/images/icon-twitter.svg'
import instagramLogo from '../../_assets/images/icon-instagram.svg'
import './footer.scss'

export const Footer = () => {
  const getYear = new Date().getFullYear()

  return (
    <footer className="mainFooter content">
      <div className="mainFooter-inner">
        <div className="mainFooter-copyRight">
          {' '}
          © {getYear}, Code Cooperative Inc.
        </div>
        <div className="mainFooter-emailGroup">
          <a href="mailto:hello@codecooperative.org?subject=Mail from Our Site">
            hello@codecooperative.org
          </a>
        </div>
        <div className="mainFooter-socialMediaGroup">
          <a
            href="https://twitter.com/codecooperative"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia-item"
          >
            <img
              className="socialMedia-link"
              src={twitterLogo}
              alt="The Code Cooperative on Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/codecooperative/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia-item"
          >
            <img
              className="socialMedia-link"
              src={instagramLogo}
              alt="The Code Cooperative on Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
