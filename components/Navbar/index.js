import React, { Component } from 'react';
import Link from 'next/link';
import './Navbar.scss';

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__wrapper">
        <Link href="/">
            <a className="navbar__link" title="API">
              Обо мне
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar__link" title="About Next Js">
              Мои работы
            </a>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;