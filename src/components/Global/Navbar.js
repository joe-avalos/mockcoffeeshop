import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaCartArrowDown } from 'react-icons/fa'

import logo from '../../images/logo.svg'
import links from '../../constants/links'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [css,setCss] = useState('collapse navbar-collapse')
  
  return <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="logo"/>
      {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/webalys */}
    </Link>
    <button
      type="button"
      className="navbar-toggler"
      onClick={() => {
        setCss(open ? 'collapse navbar-collapse' : 'collapse navbar-collapse show')
        setOpen(!open)
      }}>
      <span className="navbar-toggler-icon"/>
    </button>
    <div className={css}>
      <ul className="navbar-nav mx-auto">
        {links.map((item, idx) => {
          return <li key={idx} className="nav-item">
            <Link className="nav-link text-capitalize" to={item.path}>{item.text}</Link>
          </li>
        },
        )}
        <li className="nav-item ml-sm-5">
          <FaCartArrowDown className="cart-icon" />
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar
