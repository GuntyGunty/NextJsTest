import React, { Component } from 'react';
import Link from 'next/link';
import './Footer.scss';
import Contacts from '../Contacts'
import Social from '../Social'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <Contacts />
          <Social />
        </div>
      </footer>
    )
  }
}

export default Footer;