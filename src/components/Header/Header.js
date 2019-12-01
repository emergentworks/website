import React, { useState } from 'react'
import { Link } from 'gatsby'
import './header.scss'
import logo from '../../_assets/images/logo--horizontal.svg'

export const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false)
  const toggleVisibility = navVisibility ? 'is-visible' : 'is-hidden'
  const activeMenu = e => {
    setNavVisibility(!navVisibility)
  }

  function handleChange(newValue) {
    setNavVisibility(newValue)
  }
  return (
    <header className="mainHeader content">
      <div className="mainHeader-logoGroup">
        <img className="logo--outline" src={logo} alt="the code cooperative" />
      </div>
      <button
        type="button"
        className={`mainHeader-navIcon ${navVisibility ? 'is-active' : ''}`}
        onClick={() => activeMenu()}
      >
        <div></div>
      </button>
      <nav
        className={`mainHeader-primaryNav ${navVisibility ? 'is-active' : ''}`}
      >
        <ul className="primaryNav-linkGroup">
          <li className="primaryNav-linkItem">
            <Link className="primaryNav-link" to="#">
              About us
            </Link>
          </li>
          <li className="primaryNav-linkItem">
            <Link className="primaryNav-link" to="#">
              Volunteer
            </Link>
          </li>
          <li className="primaryNav-linkItem">
            <Link className="primaryNav-link" to="#">
              Contact
            </Link>
          </li>
          <li className="primaryNav-linkItem">
            <Link className="btn btn-tertiary primaryNav-link" to="#">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
