import React, { useState } from 'react'
import { Link } from 'gatsby'
import './header.scss'
import logo from '../../_assets/images/logo--horizontal.svg'

export const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false)
  // const toggleVisibility = navVisibility ? 'is-visible' : 'is-hidden'
  const activeMenu = () => {
    setNavVisibility(!navVisibility)
  }

  return (
    <header className="mainHeader">
      <div className="mainHeader-inner content">
        <div className="mainHeader-logoGroup">
          <Link to="/">
            <img
              className="logo--outline"
              src={logo}
              alt="the code cooperative"
            />
          </Link>
        </div>
        <button
          type="button"
          className={`mainHeader-navIcon ${navVisibility ? 'is-active' : ''}`}
          onClick={() => activeMenu()}
        >
          <div></div>
        </button>
        <nav
          className={`mainHeader-primaryNav ${
            navVisibility ? 'is-active' : ''
          }`}
        >
          <ul className="primaryNav-linkGroup">
            <li className="primaryNav-linkItem">
              <Link className="primaryNav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="primaryNav-linkItem">
              <Link className="primaryNav-link" to="/volunteer">
                Volunteer
              </Link>
            </li>
            <li className="primaryNav-linkItem">
              <Link className="primaryNav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="primaryNav-linkItem">
              <Link className="btn btn-tertiary primaryNav-link" to="/donate">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
