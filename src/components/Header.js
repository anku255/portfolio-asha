import React from 'react'
import Link from 'gatsby-link'
import { FaHome, FaPencilAlt, FaUser } from 'react-icons/fa'

const ListItemSm = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
)

const ListItemLg = props => (
  <li className="navigation-sm__item">
    <Link className="navigation-sm__link" to={props.to}>
      {props.children}
    </Link>
  </li>
)

const NavigationLarge = () => (
  <nav className="navigation-lg">
    <ul className="nav-list">
      <ListItemSm to="/">
        <FaHome className="nav-icon" /> Home
      </ListItemSm>
      <ListItemSm to="/sketches/">
        <FaPencilAlt className="nav-icon" /> Sketches
      </ListItemSm>
      <ListItemSm to="/about/">
        <FaUser className="nav-icon" /> About Me
      </ListItemSm>
    </ul>
  </nav>
)

const NavigationSmall = () => (
  <div className="navigation-sm">
    <input
      type="checkbox"
      className="navigation-sm__checkbox"
      id="navi-toggle"
    />
    <label htmlFor="navi-toggle" className="navigation-sm__button">
      <span className="navigation-sm__icon">&nbsp;</span>
    </label>

    <div className="navigation-sm__background">&nbsp;</div>

    <nav className="navigation-sm__nav">
      <ul className="navigation-sm__list">
        <ListItemLg to="/">
          <span>
            <FaHome />
          </span>
          Home
        </ListItemLg>
        <ListItemLg to="/sketches/">
          <span>
            <FaPencilAlt />
          </span>
          Sketches
        </ListItemLg>
        <ListItemLg to="/about/">
          <span>
            <FaUser />
          </span>
          About Me
        </ListItemLg>
      </ul>
    </nav>
  </div>
)

const MainLogo = () => <div className="header__main-logo">Asha Sharma</div>

const Header = () => (
  <>
    <div className="header">
      <Link className="header__logo-name" to="/">
        <div className="diamond" />
      </Link>

      <div className="header__sub">
        <MainLogo />
        <NavigationLarge />
      </div>
    </div>
    <NavigationSmall />
  </>
)

export default Header
