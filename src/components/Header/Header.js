import React from 'react'
import { Link } from 'gatsby'

export const Header = () => (
  <header className="mainHeader">
    <div className="mainHeader-logoGroup">Logo</div>
    <nav className="mainHeader-primaryNav">
      <ul className="primaryNav-linkGroup">
        <li className="primaryNav-linkItem">
          <Link to="#">About us</Link>
        </li>
        <li className="primaryNav-linkItem">
          <Link to="#">Volunteer</Link>
        </li>
        <li className="primaryNav-linkItem">
          <Link to="#">Code</Link>
        </li>
        <li className="primaryNav-linkItem">
          <Link to="#">Donate</Link>
        </li>
      </ul>
    </nav>
  </header>
)
